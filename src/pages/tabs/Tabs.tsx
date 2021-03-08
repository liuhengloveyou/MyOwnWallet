import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { bagOutline, bodyOutline, ellipse, square, walletOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import React from 'react';

const Tabs: React.FC = () => {
  // this.state.count <= 0 ? <Redirect to="/accountscreateidx" /> : 
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/tab1" component={Tab1} />
        <Route path="/tabs/tab2" component={Tab2} />
        <Route path="/tabs/tab3" component={Tab3} />
        <Route exact path="/tabs">
          <Redirect to="/tabs/tab1" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={walletOutline} />
          <IonLabel>资产</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={bagOutline} />
          <IonLabel>市场</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={bodyOutline} />
          <IonLabel>我</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default Tabs;
