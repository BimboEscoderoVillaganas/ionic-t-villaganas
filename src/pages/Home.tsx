import React, { useState } from 'react';
import {
  IonFooter,
  IonBackButton,
  IonButton,
  IonButtons,
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
  IonItemDivider,
  IonSearchbar
} from '@ionic/react';

//Custom CSS
import './Home.css';

//Ionic Icons
import { logoFirebase, logoReact, logoIonic, readerOutline, logoFacebook, logoTwitter, logoInstagram, speedometerOutline,calculator,pencil, chatbubble} from 'ionicons/icons';


const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ionic-t-villaganas/click_counter'
  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ionic-t-villaganas/Calculator'
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ionic-t-villaganas/ToDoList'
  },
  {
    title: 'Quotes Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ionic-t-villaganas/quotegenerator'
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ionic-t-villaganas/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
  }
  
];

  const Home: React.FC = () => {

    {/*Dynamic Search*/}
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
          <h1 id="text">Welcome to my Ionic App</h1>
        <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus natus cupiditate ad nihil. Placeat odio quo aperiam animi ad recusandae, accusantium, neque explicabo impedit quae consequuntur laborum rem culpa sed ipsum error numquam earum pariatur hic eligendi minus magni facilis perspiciatis doloremque! Harum ullam archigit tecto quidem aliquid ex dolore quasi odit maiores suscipit facilis, rerum facere nisi ducimus qui voluptas similique id! Quas vel voluptatibus perspiciatis placeat dolore corrupti ipsam fuga sequi cupiditate! Similique pariatur libero id sint expedita amet enim reiciendis aliquid labore possimus.</p>
        <div className="profile-details">
          <h3>Bimbo E. Villaganas</h3>
          <p>20201259@nbsc.edu.ph</p>
          <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/*Dynamic Search*/}
        <>
        <div id="card">
        <IonCardHeader>
            <IonCardTitle className="card-header">Applications Developed By Bimbo E. Villaganas</IonCardTitle>
            <IonCardSubtitle className="card-header1">List Of Applications</IonCardSubtitle>
          </IonCardHeader>
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index}  routerLink={card.link} routerDirection='forward'>
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
          ))}</div>
        </>
        

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

export default Home;
