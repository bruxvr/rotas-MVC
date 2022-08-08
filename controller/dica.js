import dicaBd from '../infra/dicaBD.js';
import dicaModel from '../model/dica.js';

export const dica = (app) => { 
    app.get('/dica', (req, res) => {
    const dica = dicaBd[Math.floor(Math.random() * dicaBd.length)];
    res.send(dica);
})


app.post('/criar', (req, res) => {
    const { dica } = req.body;
    const dataM = new dicaModel(dica);
    dicaBd.push(dataM);
    res.send(dicaBd);
})
};

