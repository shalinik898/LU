let crypto = require('crypto');

//generate a 32 bytes
const key = crypto.randomBytes(32);

//AES Advanced Encryption Standard in Cipher block chaining mode

const algorithm = 'aes-256-cbc';

//initializing vector 
const iv = crypto.randomBytes(16);

const encrypt = (data) => {
    const cipher = crypto.createCipheriv(algorithm,key,iv)
    let encrypted = cipher.update(data, 'utf-8','hex');
    encrypted +=cipher.final('hex');
    return encrypted;
}

const secret_message = "Hello :)";
const encrypted_data = encrypt(secret_message);
console.log('Encrypted message:' + encrypted_data);

const decrypt = (encrypted) =>{

    const decipher = crypto.createDecipheriv(algorithm,key,iv)
    let decrypted = decipher.update(encrypted,'hex','utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted; 

}

const decrypted_message = decrypt(encrypted_data);
console.log('Decrpyted message '+ decrypted_message);