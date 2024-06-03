import React, { useState } from 'react';
import { IonThumbnail, IonTabButton, IonFooter, IonList, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { arrowBackCircle, logoFacebook, home, logoTwitter, logoInstagram } from 'ionicons/icons';
import { IonRouterLink } from '@ionic/react'; // Added IonRouterLink import
import './Click_couter.css';


const Tab2: React.FC = () => {
  const [count, setCount] = useState(0);


  const incrementCounter = () => {
    setCount(count + 1);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
        </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="counter-content">
      
   
           
        <div id="counter">
          <h1>Click Counter</h1>
          <p>Total Clicks: {count}</p>
          <IonButton onClick={incrementCounter}>Click me!</IonButton>
        </div>
        <IonFooter>
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: 20201259@nbsc.edu.ph</p>
              <p>Phone: 09123456789</p>
              <p>Address: Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <IonList className="social-links">
                <IonItem><a href="#"><IonIcon icon={logoFacebook} />BIMBO VILLAGANAS</a></IonItem>
                <IonItem><a href="#"><IonIcon icon={logoTwitter} />BIMBO VILLAGANAS</a></IonItem>
                <IonItem><a href="#"><IonIcon icon={logoInstagram} />BIMBO VILLAGANAS</a></IonItem>
              </IonList>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates.</p>
              <form>
                <IonItem>
                  <IonInput type="email" placeholder="Your email" name="email" />
                  <IonButton type="submit">Subscribe</IonButton>
                </IonItem>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Bimbo E. Villaganas. All rights reserved.</p>
          </div>
        </IonFooter>


      </IonContent>
    </IonPage>
  );
};


export default Tab2;
