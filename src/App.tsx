import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/tabs/Tab1';
import Tab2 from './pages/tabs/Tab2';
import Tab3 from './pages/tabs/Tab3';

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
import Tabs from './pages/tabs/Tabs';
import AccountsCreateIdx from './pages/account/AccountsCreateIdx';
import CreateETHAccountPWD from './pages/account/CreateETHAccount';
import { usdtContract } from './global';

const App: React.FC = () => {

  useIonViewWillEnter(() => {});
  
  useIonViewDidEnter(() => {
    // console.log('ionViewDidEnter event fired');
  });

  return (<IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/accountcreate" component={AccountsCreateIdx} />
        <Route exact path="/CreateETHAccountPWD" component={CreateETHAccountPWD} />
        <Route path="/tabs" component={Tabs} />

        {/* <Route
          exact
          path="/"
          render={props => {
            return count > 0 ? <Tabs /> : <AccountsCreateIdx />;
          }}
        /> */}
        <Redirect exact from="/" to="/tabs" />

      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>);
}

export default App;
