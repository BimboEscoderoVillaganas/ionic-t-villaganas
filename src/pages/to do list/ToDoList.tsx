import React, { useState, useEffect } from 'react';
import { IonFooter, IonRouterLink, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { logoInstagram, logoTwitter, logoFacebook, trashOutline, arrowBackCircle } from 'ionicons/icons'; // Added IonIcon import for delete icon
import './ToDoList.css';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { db } from './firebase'; // Import Firebase connection

interface ToDoItem {
  id: string;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  useEffect(() => {
    // Fetch todos from Firestore on component mount
    const fetchTodos = async () => {
      const todosSnapshot = await getDocs(collection(db, 'todos'));
      const todosData = todosSnapshot.docs
        .filter(doc => doc.id && doc.data().text) // Filter out docs without id or text
        .map(doc => ({ id: doc.id, ...doc.data() } as ToDoItem)); // Type assertion here
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Omit<ToDoItem, 'id'> = {
        text: newTodoText,
        completed: false,
      };

      // Add new todo to Firestore
      const docRef = await addDoc(collection(db, 'todos'), newTodo);
      setTodos([...todos, { ...newTodo, id: docRef.id }]);
      setNewTodoText('');
    }
  };

  const handleToggleTodo = async (id: string) => {
    const todoToUpdate = todos.find(todo => todo.id === id);
    if (todoToUpdate) {
      const updatedTodo: Partial<ToDoItem> = { ...todoToUpdate, completed: !todoToUpdate.completed };
      await updateDoc(doc(db, 'todos', id), updatedTodo);
      const updatedTodos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
    }
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id));
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
        </IonButtons>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
   
        <IonItem>
          <IonInput placeholder="Enter a new todo" value={newTodoText} onIonChange={(e) => setNewTodoText(e.detail.value!)} />
          <IonButton slot="end" onClick={handleAddTodo}>Add</IonButton>
        </IonItem>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => handleToggleTodo(todo.id)} />
              <IonLabel>{todo.text}</IonLabel>
              <IonButton fill="clear" color="danger" slot="end" onClick={() => handleDeleteTodo(todo.id)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ToDoList;
