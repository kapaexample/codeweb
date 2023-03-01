import express from 'express';
import controllerPage from '../controllers/controllerPage';

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', controllerPage.gethomePage);
    router.get('/about', controllerPage.getaboutPage);
    app.use('/', router);
}

module.exports = initWebRouter;