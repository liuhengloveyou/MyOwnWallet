import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { documentLockOutline, documentOutline, documentTextOutline, keyOutline, walletOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import './AccountsCreateIdx.css';

import { web3 } from '../../global';
import { SaveAccount } from '../../utils/storage';

const CreateETHAccountPWD: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [pwda, setPwda] = useState<string>("");
    const [pwdts, setPwdts] = useState<string>("");

    let [showToast1, setShowToast1] = useState<boolean>(false);
    let [showToastMsg, setShowToastMsg] = useState<string>("");

    function submit() {
        console.log(">>>", name, pwd, pwda, pwdts);
        if (name?.trim() === "") {
            setShowToastMsg("请输入一个名称");
            setShowToast1(true);
            return;
        }

        if (pwd?.trim() === "" || pwd?.trim() !== pwda?.trim()) {
            setShowToastMsg("请正确输入密码");
            setShowToast1(true);
            return;
        }

        const account = web3.eth.accounts.create(pwd?.trim());

        SaveAccount({
            "name": name?.trim(),
            "pwd": pwd?.trim(),
            "address": account.address,
            "privateKey": account.privateKey,
            "ethBalance": "0",
            "usdtBalance": "0",
        }).then(() => {
            console.log("accounts.create: ", JSON.stringify(account));
        }).catch(() =>{
            setShowToastMsg("竟然能出错");
            setShowToast1(true);
        });
    }

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" text=""/>
                    </IonButtons>
                    <IonTitle>创建 ETH 钱包</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonToast
                    keyboardClose={true}
                    color="light"
                    position="bottom"
                    isOpen={showToast1}
                    onDidDismiss={() => setShowToast1(false)}
                    message={showToastMsg}
                    duration={2000}
                />

                <IonList lines="none">
                    <IonListHeader>钱包名称</IonListHeader>
                    <IonItem color="light">
                        <IonInput value={name} placeholder="1 ~ 12位字符" maxlength={12} onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonList>

                <IonList lines="full">
                    <IonListHeader>密码</IonListHeader>
                    <IonItem color="light">
                        <IonInput value={pwd} placeholder="钱包密码" type="password" minlength={3} onIonChange={e => setPwd(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem color="light">
                        <IonInput value={pwda} placeholder="再输一遍钱包密码" type="password" minlength={3} onIonChange={e => setPwda(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonList>

                <IonList lines="none">
                    <IonListHeader>密码提示</IonListHeader>
                    <IonItem color="light">
                        <IonInput value={pwdts} placeholder="选填" onIonChange={e => setPwdts(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonList>

                <br/><br/><br/>
                <IonFooter className="ion-no-border">
                    <IonButton expand="block" onClick={submit}>创 建</IonButton>
                </IonFooter>
            </IonContent>
        </IonPage>
    );
};

export default CreateETHAccountPWD;
