const CryptoJS = require('crypto-js');

export const decryptedJson = (encryptString, password)=>{
    // const base64EncodedKeyFromJava = btoa(password.repeat(4));
    const base64EncodedKeyFromJava = btoa(password.padEnd(16,password));

    const keyForCryptoJS = CryptoJS.enc.Base64.parse(base64EncodedKeyFromJava);
    const decodeBase64 = CryptoJS.enc.Base64.parse(encryptString)

    const decryptedData = CryptoJS.AES.decrypt(
        { ciphertext: decodeBase64},
        keyForCryptoJS,
        {mode: CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}
    );
    return decryptedData.toString(CryptoJS.enc.Utf8);

}

export const parseDate = (strDate)=>{
    const parts =strDate.split(".");
    const year =parseInt(parts[2]);
    const month =parseInt(parts[1])-1;
    const day = parseInt(parts[0]);

    return new Date(year, month, day);
}

export const getKeysFromLocalStorageByStartsWith = (strStartKey)=>
    (Object.keys(localStorage).filter((key)=>(key.startsWith(strStartKey))));

