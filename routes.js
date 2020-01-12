'use strict';

const rsaController = require('./rsaController');

module.exports = (app) => {
    app.route('/encrypt').post(rsaController.encrypt);
    app.route('/decrypt').post(rsaController.decrypt);
    app.route('/sign').post(rsaController.signSHA);
    app.route('/verify').post(rsaController.verifySHA);
}
