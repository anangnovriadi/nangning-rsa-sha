'use strict';

const rsaModule = require('./rsa');
const fs = require('fs');

let publicKey = fs.readFileSync('./public/public.pem');
let privateKey = fs.readFileSync('./public/private.pem');

exports.encrypt = () => {
    let text = 'Lorem Ipsum';

    console.log(rsaModule.encryptRSA(text, publicKey));
}

function encryptRSA() {
    var text = {"request":{"payload":"https://link.dana.id/minta/2lzl4k1y541"}, "module":"QRISReadQr","client_id":"mobile","signature":"Xz+CsfMIxRzHWPcF5vtFpMhX5hGpFTHYFp9GRFGsCtEdBCjGMhSnk0Y7avHAlNkUGyj8Z75O9/H2zHWzGkmb4Pm0xKVAks27S1kx5g8NE+O4gctjvKWccN9TQW+cuFEAzXKCoc1OuE9LpNlYnJ/s/YGaIEJI12y7tLxvmFeXsvGqMPdrYqR2RWBNfA/2VmHElrY6xrU4mwolIvhxNHPTAwRd4FXDSmAnC9VVmu4o12JJcYD8uKwWdiS01Xbeb0TNG71vPnSyyYp1+n2kk4sSmSwXmKG5X/u1PthIIUhXxNqpq4rvID7jQN15+IEjI6fe8IGYCe6wMWlLPgixVk3oqA=="}
    var r = JSON.stringify(text)
    return rsaModule.encryptRSA(r, publicKey);
}

exports.decrypt = () => {
    let encrypt = encryptRSA();

    // console.log(encrypt);

    console.log(rsaModule.decryptRSA(encrypt, privateKey));
}

exports.signSHA = () => {
    var text = 'Lorem Ipsum';

    console.log(rsaModule.signSHA(text, privateKey));
}

function signSHA() {
    // var text = 'https://github.com/anangnovriadi/nangning-logger-js/blob/master/index.js';
    var text = {"request":{"payload":"https://link.dana.id/minta/2lzl4k1y541"},"module":"QRISReadQr","client_id":"mobile","signature":"Xz+CsfMIxRzHWPcF5vtFpMhX5hGpFTHYFp9GRFGsCtEdBCjGMhSnk0Y7avHAlNkUGyj8Z75O9/H2zHWzGkmb4Pm0xKVAks27S1kx5g8NE+O4gctjvKWccN9TQW+cuFEAzXKCoc1OuE9LpNlYnJ/s/YGaIEJI12y7tLxvmFeXsvGqMPdrYqR2RWBNfA/2VmHElrY6xrU4mwolIvhxNHPTAwRd4FXDSmAnC9VVmu4o12JJcYD8uKwWdiS01Xbeb0TNG71vPnSyyYp1+n2kk4sSmSwXmKG5X/u1PthIIUhXxNqpq4rvID7jQN15+IEjI6fe8IGYCe6wMWlLPgixVk3oqA=="}
    var r = JSON.stringify(text)


    return rsaModule.signSHA(r, privateKey);
}

exports.verifySHA = () => {
    // var text = 'https://github.com/anangnovriadi/nangning-logger-js/blob/master/index.js';
    // var text = {"request":{"payload":"https://link.dana.id/minta/2lzl4k1y541"}, "module":"QRISReadQr","client_id":"mobile","signature":"Xz+CsfMIxRzHWPcF5vtFpMhX5hGpFTHYFp9GRFGsCtEdBCjGMhSnk0Y7avHAlNkUGyj8Z75O9/H2zHWzGkmb4Pm0xKVAks27S1kx5g8NE+O4gctjvKWccN9TQW+cuFEAzXKCoc1OuE9LpNlYnJ/s/YGaIEJI12y7tLxvmFeXsvGqMPdrYqR2RWBNfA/2VmHElrY6xrU4mwolIvhxNHPTAwRd4FXDSmAnC9VVmu4o12JJcYD8uKwWdiS01Xbeb0TNG71vPnSyyYp1+n2kk4sSmSwXmKG5X/u1PthIIUhXxNqpq4rvID7jQN15+IEjI6fe8IGYCe6wMWlLPgixVk3oqA=="}
    var text = {"request":{"payload":"https://link.dana.id/minta/2lzl4k1y541"},"module":"QRISReadQr","client_id":"mobile","signature":"Xz+CsfMIxRzHWPcF5vtFpMhX5hGpFTHYFp9GRFGsCtEdBCjGMhSnk0Y7avHAlNkUGyj8Z75O9/H2zHWzGkmb4Pm0xKVAks27S1kx5g8NE+O4gctjvKWccN9TQW+cuFEAzXKCoc1OuE9LpNlYnJ/s/YGaIEJI12y7tLxvmFeXsvGqMPdrYqR2RWBNfA/2VmHElrY6xrU4mwolIvhxNHPTAwRd4FXDSmAnC9VVmu4o12JJcYD8uKwWdiS01Xbeb0TNG71vPnSyyYp1+n2kk4sSmSwXmKG5X/u1PthIIUhXxNqpq4rvID7jQN15+IEjI6fe8IGYCe6wMWlLPgixVk3oqA=="}

    var r = JSON.stringify(text)

    let sign = signSHA();

    console.log(rsaModule.verifySHA(r, sign, publicKey));
}