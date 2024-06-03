import React, { useState } from 'react';
import {
  IonFooter,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from '@ionic/react';

// Ionic Icons
import { logoFirebase, logoReact, logoIonic, readerOutline, logoFacebook, logoTwitter, logoInstagram, speedometerOutline, calculator, pencil, chatbubble } from 'ionicons/icons';

// Custom CSS
import './Home.css';

const cardData = [
  
  {
    title: 'Leave Me A Message',
    icon: pencil,
    subtitle: 'Message',
    link: '/ionic-t-villaganas/ToDoList'
  },
  {
    title: 'My 20 Unspoken Echoes (Randomized)',
    icon: chatbubble,
    subtitle: 'Reflections on a Love Unfulfilled',
    link: '/ionic-t-villaganas/quotegenerator'
  },
];

const Home: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        

        {/* Dynamic Search */}
        <div id="card">
          <IonCardHeader>
            <IonCardTitle className="card-header">This Is For You Medz</IonCardTitle>
            <IonCardSubtitle className="card-header1">Gratitude fills my heart as I reflect on the joy you bring into my life. I hope we could meet each other again. I miss you terribly and yearn for the warmth of your company</IonCardSubtitle>
          </IonCardHeader>
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward'>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol push=".75">
                          <IonIcon className="home-card-icon" icon={card.icon} color="primary" />
                        </IonCol>
                        <IonCol pull='3'>
                          <div className="home-card-title">{card.title}</div>
                          <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            ))}
             
          {/* Unspoken Echoes Letter */}
          <div className="unspoken-echoes">
            <h2>A Heartfelt Tribute: Thank You, Medal Grace (Langga)</h2>
            <p>Dear Medal Grace Sevilla (Langga),</p>
            <p>There are some words that have lingered in my heart, words I have never found the right moment to share. Life has a way of weaving complex stories, and ours is one of silent admiration and unspoken feelings.</p>
            <p>I want you to know how much I cherish every moment we've shared. Your laughter is a melody that brightens my day, your kindness a light that guides many. You inspire me to be a better person, even from a distance. Watching you pursue your dreams and bring joy to those around you has been a privilege.</p>
            <p>Sometimes, I find myself imagining a world where circumstances were different, where our paths could align in a way that brings us closer. Before you graduate, I hold onto the hope that we may have the chance to meet each other, just the two of us, acknowledging the reality of life's uncertainties.</p>
            <p>Yet, I respect the life you have and the happiness you've found.</p>
            <p>In another life, perhaps, things could have been different. But in this one, I find solace in knowing that you're happy, and that’s what matters most to me.</p>
            <p>Thank you for being a wonderful part of my life, even if only as a cherished friend.</p>
            <p>With all my heart,</p>
            <p>Bimbo Villaganas</p>
          </div>
        </div>

        <IonFooter>
          <div className="footer-bottom">
            <p>&copy; 2024 Bimbo E. Villaganas. All rights reserved.</p>
          </div>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;