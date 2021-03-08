import { Plugins } from '@capacitor/core';
import { ETHAccount } from '../models';

const { Storage } = Plugins;

const ACCOUNTKEY = "ACCOUNTs";

export async function SetObject(key: string, value: Object) {
    await Storage.set({
        key: key,
        value: JSON.stringify(value)
    });
};

export async function GetObject(key: string) {
    const ret = await Storage.get({ key: key });
    if (ret == null) {
        return null;
    }

    return JSON.parse(ret.value as string);
};

export async function LoadAccount() {
    let val: Array<ETHAccount> = await GetObject(ACCOUNTKEY);
    
    return val;
}

export async function SaveAccount(account: ETHAccount) {
    let nowVal: Array<ETHAccount> = await GetObject(ACCOUNTKEY);
    if (nowVal == null) {
        nowVal = [];
    }
    console.log("accounts>>>", nowVal);

    for (let i = 0; i < nowVal.length; i++) {
        if (nowVal[i].address === account.address) {
            return
        }
    }

    nowVal.push(account)

    await SetObject(ACCOUNTKEY, nowVal);    
}