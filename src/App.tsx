import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  home, informationCircle, calculator, closeCircle } from 'ionicons/icons'; // Import necessary icons
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import ToDoList from './pages/to do list/ToDoList';
import QuoteGenerator from './pages/quotegenerator/quotegenerator';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ionic-t-villaganas/Home">
            <Home />
          </Route>
          <Route exact path="/ionic-t-villaganas/Profile">
            <Profile />
          </Route>
          <Route exact path="/ionic-t-villaganas/ToDoList">
            <ToDoList />
          </Route>
          <Route path="/ionic-t-villaganas/quotegenerator">
            <QuoteGenerator />
          </Route>
          
          <Route exact path="/ionic-t-villaganas/">
            <Redirect to="/ionic-t-villaganas/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/ionic-t-villaganas/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/ionic-t-villaganas/Profile">
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;