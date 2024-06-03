import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonRouterLink,
  IonIcon,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import { arrowBackCircle } from 'ionicons/icons';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from './firebase'; // Import Firebase connection
import './quotegenerator.css'; // Import custom CSS file for styling

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null); // State to store random index

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotesSnapshot = await getDocs(collection(db, 'quotes'));
      const quotesData = quotesSnapshot.docs.map(doc => doc.data().message);
      setQuotes(quotesData);
    };

    fetchQuotes();
  }, []);

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(null); // Reset the index to null
    setShowAlert(false); // Hide the alert
  };

  // Function to render random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return quotes[randomIndex];
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
        </IonButtons>
          <IonTitle>My 20 Unspoken Echoes (Randomized)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
    
        <div className="quote-container">
          <img alt="Silhouette of mountains" src="https://img1.picmix.com/output/stamp/normal/1/4/5/4/2044541_fb07e.gif" />
          {/*Button Trigger*/}
          
        <div>
          <h4>I wish you all the best, and I'll just keep you as my favorite unfulfilled wish</h4>
        </div>
          <IonButton color="warning" onClick={handleOpenAlert}>
            Click me
          </IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
            header="Reflections on a Love Unfulfilled"
            cssClass="custom-alert"
            message={renderRandomMessage()}
            buttons={['Close']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QuoteGenerator;