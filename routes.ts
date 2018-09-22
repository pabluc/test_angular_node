import * as express from 'express';
const path = require('path');
export const routes = express.Router();
//routes.get('/', (req, res) => res.send({hello: 'world'}));
routes.get('/users', (req, res) => res.send([]));
routes.post('/users', (req, res) => res.send({body: req.body}));


routes.post('/api/CustomerLogin', (req, res) => {

    console.log(req.headers);

    res.send(
    {
        "_id":  "5b9d1e46fb6fc00e4d765730",
        "username": "esteban",
        "password": "mipass",
        "id_client": "5b9d1e46fb6fc00e4d765711",
        "token": "5ba03af30275b0001510bc04"
    });
}
);

routes.get('/api/clients/:id', (req, res) => {

    console.log(req.headers);

    res.send(
        {
            "_id": "5b9d1e46fb6fc00e4d765711",
            "company_name": "Cliente 1",
            "rut": "123456",
            "entry_date": "15-09-2019"
        });
}
);


routes.get('/*', function (req, res) {
    console.log(req.url);
    if(req.url.split('.').length>1)
        res.sendFile(req.url, {root: './customtoys-customers-app/dist'});
     else
        res.sendFile('index.html', {root: './customtoys-customers-app/dist'});
        
    
    // if(req.url.split('.').length>1)
    //     res.sendFile(path.join(__dirname + '/customtoys-customers-app/dist'+req.url));
    // else
    //     res.sendFile(path.join(__dirname + '/customtoys-customers-app/dist/index.html'));
    
   });
