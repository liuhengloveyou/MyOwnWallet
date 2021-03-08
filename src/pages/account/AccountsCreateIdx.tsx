import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { documentLockOutline, documentOutline, documentTextOutline, keyOutline, walletOutline } from 'ionicons/icons';
import React from 'react';
import './AccountsCreateIdx.css';

import { web3 } from '../../global';
import { SaveAccount } from '../../utils/storage';

const AccountsCreateIdx: React.FC = () => {
    useIonViewDidLeave(() => {
        console.log('AccountsCreateIdx ionViewDidLeave event fired');
    });

    useIonViewWillEnter(() => {
        console.log('AccountsCreateIdx ionViewDidEnter event fired');
    });

    useIonViewWillLeave(() => {
        console.log('AccountsCreateIdx ionViewWillLeave event fired');
    });

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" text="" />
                    </IonButtons>
                    <IonTitle>ETH钱包</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList lines="none">
                    <IonItem color="light" detail href="/CreateETHAccountPWD">
                        <IonIcon slot="start" icon={walletOutline}></IonIcon>
                        <IonLabel>
                            <h2>创建钱包</h2>
                            <p>还末拥有钱包，点击创建</p>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonList lines="inset">
                    <IonListHeader>导入钱包</IonListHeader>
                    <IonItem color="light" detail>
                        <IonIcon slot="start" icon={documentTextOutline}></IonIcon>
                        <IonLabel>
                            <h2>助记语</h2>
                            <p>助记语由单词组成，以空格隔开</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem color="light" detail>
                        <IonIcon slot="start" icon={keyOutline}></IonIcon>
                        <IonLabel>
                            <h2>私钥</h2>
                            <p>明文私钥字符</p>
                        </IonLabel>
                    </IonItem>
                    <IonItem color="light" detail>
                        <IonIcon slot="start" icon={documentLockOutline}></IonIcon>
                        <IonLabel>
                            <h2>Keystore</h2>
                            <p>加密的私钥JSON文件</p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default AccountsCreateIdx;
