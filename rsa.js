var NodeRSA = require('node-rsa'),
    crypto = require('crypto');

function pad(text) {
    pad_bytes = 8 - (text.length % 8)
    for (var x = 1; x <= pad_bytes; x++)
        text = text + String.fromCharCode(0)
    return text;
}

module.exports = {
    encryptRSA: (text, publicKey) => {
        publicKey = new NodeRSA(publicKey);

        var bitLength = 214;
        var encrypted = [];
        try {
            var length = text.length;
            var offset = Math.ceil(length / bitLength);

            for (var i = 1; i <= offset; i++) {
                var pointer = i * bitLength;
                encrypted.push(publicKey.encrypt(text.substring(pointer - bitLength, pointer), 'base64'));
            }

            return encrypted;
        } catch (e) {
            //console.log("============================\n" + e)
            return {code: e.code, message: e.message};
        }
    },

    decryptRSA: (text, privateKey) => {
        privateKey = new NodeRSA(privateKey);
        
        var decrypted = "";

        try {
            for (var i = 0; i < text.length; i++) {
                decrypted += privateKey.decrypt(text[i], 'utf8');
            }
            return decrypted;
        } catch (e) {
            //console.log("============================\n" + e)
            return {code: e.code, message: e.message};
        }
    },

    signSHA: (text, privateKey) => {
        try {
            const sign = crypto.createSign('SHA256');
            sign.update(text);
            return sign.sign(privateKey, 'base64');
        } catch (e) {
            return {code: e.code, message: e.message};
        }
    },

    verifySHA: (text, sign, publicKey) => {
        try {
            const verify = crypto.createVerify('SHA256');
            verify.update(text);
            return verify.verify(publicKey, sign, 'base64');
        } catch (e) {
            return {code: e.code, message: e.message};
        }
    },

};
