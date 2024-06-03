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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" alt="Profile" />
          </IonAvatar>
          <div className="profile-details">
            <h1>Bimbo E. Villaganas</h1>
            <p>20201259@nbsc.edu.ph</p>
            <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="additional-content">
          <IonList>
            <IonListHeader>
              <h2>About Me</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem nec nulla venenatis eleifend.</IonLabel>
            </IonItem>
          </IonList>

          <IonList>
            <IonListHeader>
              <h2>Interests</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Traveling</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Photography</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Reading</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Music</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Art</IonLabel>
            </IonItem>
          </IonList>

          <IonList>
            <IonListHeader>
              <h2>Skills</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Web Development</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Graphic Design</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Content Writing</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Project Management</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Communication</IonLabel>
            </IonItem>
          </IonList>
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

export default Profile;
