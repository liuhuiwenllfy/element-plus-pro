import {JSEncrypt} from 'jsencrypt'


export const encrypt = (data: string, publicKey: string) => {
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置公钥
    encryptor.setPublicKey(publicKey);
    // 加密数据
    console.log(encryptor.encrypt(data))
    return encryptor.encrypt(data);
}
export const decrypt = (text: string, privateKey: string) => {
    // 新建JSEncrypt对象
    let decrypt= new JSEncrypt();
    // 设置私钥
    decrypt.setPrivateKey(privateKey);
    // 解密数据
    console.log(decrypt.decrypt(text))
    return decrypt.decrypt(text);
}