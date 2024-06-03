import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonIcon, IonList, IonListHeader, IonFooter, IonInput, IonButton } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="cover-photo">
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Cover" />
        </div>
        <div className="profile-info">
          <IonAvatar className="avatar">
            <img src="/ionic-t-villaganas/src/pages/profile/img/me.jpg" alt="Profile" />
          </IonAvatar>
          <div className="profile-details">
            <h1>Bimbo E. Villaganas</h1>
            <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
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

export default Profile;
