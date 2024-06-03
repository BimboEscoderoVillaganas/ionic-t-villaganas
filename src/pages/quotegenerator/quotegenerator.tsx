import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import './quotegenerator.css';
import audioFile1 from '../../../public/mp3/m1.mp3';
import audioFile2 from '../../../public/mp3/m2.mp3';
import audioFile3 from '../../../public/mp3/m3.mp3';
import audioFile4 from '../../../public/mp3/m4.mp3';
import audioFile5 from '../../../public/mp3/m5.mp3';


const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [displayedQuotes, setDisplayedQuotes] = useState<string[]>([]);
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const audioFiles = [audioFile1, audioFile2, audioFile3, audioFile4, audioFile5];

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotesSnapshot = await getDocs(collection(db, 'quotes'));
      const quotesData = quotesSnapshot.docs.map(doc => doc.data().message);
      setQuotes(quotesData);
    };

    fetchQuotes();
  }, []);

  const handleOpenAlert = () => {
    if (displayedQuotes.length === quotes.length) {
      setDisplayedQuotes([]);
    }
    const remainingQuotes = quotes.filter(quote => !displayedQuotes.includes(quote));
    const newQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
    setDisplayedQuotes([...displayedQuotes, newQuote]);
    setCurrentQuote(newQuote);
    setShowAlert(true);
    playRandomAudio();
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  };

  const renderRandomMessage = () => {
    return currentQuote || '';
  };

  const playRandomAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const randomAudioIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio(audioFiles[randomAudioIndex]);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/home" />
          </IonButtons>
          <IonTitle>My 20 Unspoken Echoes (Randomized)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="quote-container">
          <img alt="Silhouette of mountains" src="https://img1.picmix.com/output/stamp/normal/1/4/5/4/2044541_fb07e.gif" />
          <div>
            <h4>I wish you all the best, and I'll just keep you as my favorite unfulfilled wish</h4>
          </div>
          <IonButton color="warning" onClick={handleOpenAlert}>
            Click me
          </IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={handleAlertDismiss}
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
