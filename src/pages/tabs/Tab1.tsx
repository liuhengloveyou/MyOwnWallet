import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { ellipsisHorizontalOutline, menu } from 'ionicons/icons';
import React, { useState } from 'react';

import { addr, web3, usdtContract } from '../../global';
import { LoadAccount } from '../../utils/storage';
import { ETHAccount } from '../../models';
import './Tab1.css';

const Tab1: React.FC = () => {
  let [account, setAccount] = useState<ETHAccount>();
  let [balance, setBalance] = useState<string>("");
  let [usdtBalance, setUsdtBalance] = useState<number>(0);

  useIonViewWillEnter(() => {
    console.log('ionViewDidEnter event fired');
    LoadAccount().then((accounts) => {
      console.log("Tab1 accounts: ", accounts[accounts.length-1]);
      setAccount(accounts[accounts.length-1]);
    });

    web3.eth.getBalance(addr).then((balance) => {
      console.log("getBalance>>>", balance);
  
      setBalance(web3.utils.fromWei(balance, 'ether'));
    });

    usdtContract.methods.balanceOf('0xa20f10289248717374e9b7776dc368aa526cb6f2').call().then(async (balance: any) => {
      let decimals = await usdtContract.methods.decimals().call();
      let name = await usdtContract.methods.name().call();
      let symbol = await usdtContract.methods.symbol().call();

      setUsdtBalance(balance / Math.pow(10, decimals));

      console.log("usdt getBalance>>>", name, symbol, balance,  balance / Math.pow(10, decimals));
    });
  });

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>钱包</IonTitle>
        <IonButtons slot="end">
          <IonButton href="/accountcreate">
            <IonIcon slot="icon-only" icon={menu} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {/* <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonCard color="light">
        <IonItem lines="none" color="light">
          <IonAvatar slot="start">
            <IonImg src={"assets/eth.png"} />
          </IonAvatar>
          <IonLabel>{account?.name}</IonLabel>
          <IonIcon icon={ellipsisHorizontalOutline} slot="end" />
        </IonItem>

        <IonCardContent>
          {account?.address}
          
          {/* <IonNote color="primary" className="price">99</IonNote> */}
        </IonCardContent>
      </IonCard>


      <IonList lines="inset">
      <IonListHeader> 资产 </IonListHeader>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src={"assets/eth.png"} />
        </IonAvatar>
        <IonLabel>ETH</IonLabel>
        <IonNote slot="end" color="primary">{balance}</IonNote>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <IonImg src={"assets/tether.png"} />
        </IonAvatar>
        <IonLabel>USDT</IonLabel>
        <IonNote slot="end" color="primary">{usdtBalance}</IonNote>
      </IonItem>
    </IonList> 

    </IonContent>
  </IonPage>
  );
};

export default Tab1;
