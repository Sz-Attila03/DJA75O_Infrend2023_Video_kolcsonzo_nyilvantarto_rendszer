import express = require('express');
import { DvdController } from './controller/dvd.controller';
import { KazetakController } from './controller/kazetak.controller';
import { UserController } from './controller/user.controller';
import { checkUser } from './protect-routers';
import { AllaporController } from './controller/allapot.controller';
import { KolcsonzottDvdController } from './controller/kolcsonzottdvd.controller';
import { KolcsonzottkazetaController } from './controller/kolcsonzottkazeta.controller';

export function getRoutes()
{
    const router = express.Router();
    const dvdController = new DvdController();
    const kazetakController = new KazetakController();
    const userController = new UserController();
    const allapotController = new AllaporController();
    const kolcsonzottDvdController = new KolcsonzottDvdController();
    const KolcsonzottkazetaC = new KolcsonzottkazetaController();

    router.get('/dvd', dvdController.getAll);
    router.get('/dvd/:id', dvdController.getOne);
    router.post('/dvd', checkUser, dvdController.create);
    router.put('/dvd', checkUser, dvdController.update);
    router.delete('/dvd/:id', checkUser, dvdController.delete);

    router.get('/kazetak', kazetakController.getAll);
    router.get('/kazetak/:id', kazetakController.getOne);
    router.post('/kazetak', checkUser, kazetakController.create);
    router.put('/kazetak', checkUser, kazetakController.update);
    router.delete('/kazetak/:id', checkUser, kazetakController.delete);

    router.get('/allapot', allapotController.getAll);
    router.get('/allapot/:id', allapotController.getOne);
    router.post('/allapot', checkUser, allapotController.create);
    router.put('/allapot', checkUser, allapotController.update);
    router.delete('/allapot/:id', checkUser, allapotController.delete);

    router.get('/kolcsonzottdvd', kolcsonzottDvdController.getAll);
    router.get('/kolcsonzottdvd/:id', kolcsonzottDvdController.getOne);
    router.post('/kolcsonzottdvd', checkUser, kolcsonzottDvdController.create);
    router.put('/kolcsonzottdvd', checkUser, kolcsonzottDvdController.update);
    router.delete('/kolcsonzottdvd/:id', checkUser, kolcsonzottDvdController.delete);
    router.delete('/kolcsonzottdvd/deletbyuiddid/:dvdid', kolcsonzottDvdController.deletbyuiddid);

    router.get('/kolcsonzottkazeta', KolcsonzottkazetaC.getAll);
    router.get('/kolcsonzottkazeta/:id', KolcsonzottkazetaC.getOne);
    router.post('/kolcsonzottkazeta', checkUser, KolcsonzottkazetaC.create);
    router.put('/kolcsonzottkazeta', checkUser, KolcsonzottkazetaC.update);
    router.delete('/kolcsonzottkazeta/:id', checkUser, KolcsonzottkazetaC.delete);
    router.delete('/kolcsonzottkazeta/deletbyuiddid/:kazetaid', KolcsonzottkazetaC.deletbyuiddid);

    router.get('/user', userController.getAll);
    router.get('/user/:id', userController.getOne);
    router.post('/user', userController.create);
    router.put('/user', checkUser, userController.update);
    router.delete('/user/:id', checkUser, userController.delete);

    router.get('/user/keresUsername/:username', userController.keresUsername);
    router.get('/user/keresSzemSzam/:szemSzam', userController.keresSzemSzam);
    router.get('/user/keresId/:id', userController.keresId);
    
    router.post('/user/login', userController.login);

    return router;
}