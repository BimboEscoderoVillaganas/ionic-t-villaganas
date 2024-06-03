import React, { useState } from 'react';
import { IonFooter, IonList, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { logoFacebook, arrowBackCircle, logoTwitter, logoInstagram} from 'ionicons/icons';
import { IonRouterLink } from '@ionic/react'; // Added IonRouterLink import
import './Calculator.css';

const Tab3: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
        </IonButtons>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="calculator-container">
          <div className="result">{result ? result : expression}</div>
          <div className="buttons">
            <div className="row">
              <IonButton onClick={() => handleButtonClick('9')}>9</IonButton>
              <IonButton onClick={() => handleButtonClick('8')}>8</IonButton>
              <IonButton onClick={() => handleButtonClick('7')}>7</IonButton>
              <IonButton onClick={() => handleButtonClick('/')}>/</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('6')}>6</IonButton>
              <IonButton onClick={() => handleButtonClick('5')}>5</IonButton>
              <IonButton onClick={() => handleButtonClick('4')}>4</IonButton>
              <IonButton onClick={() => handleButtonClick('*')}>*</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('3')}>3</IonButton>
              <IonButton onClick={() => handleButtonClick('2')}>2</IonButton>
              <IonButton onClick={() => handleButtonClick('1')}>1</IonButton>
              <IonButton onClick={() => handleButtonClick('-')}>-</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('0')}>0</IonButton>
              <IonButton onClick={() => handleButtonClick('.')}>.</IonButton>
              <IonButton onClick={() => handleButtonClick('C')} id="c-button">C</IonButton>
              <IonButton onClick={() => handleButtonClick('+')}>+</IonButton>
            </div>
            <div className="row">
            <IonButton onClick={() => handleButtonClick('=')} id="equals-button">=</IonButton>
            </div>
          </div>
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

export default Tab3;
