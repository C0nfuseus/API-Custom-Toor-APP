const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const listChoices = [
    {id: 1, actType: 'in', locStatus: 'passive', Group: 'Solo', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Monumen Nasional'},
    {id: 2, actType: 'in', locStatus: 'passive', Group: 'Couple', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Monumen Nasional'},
    {id: 3, actType: 'in', locStatus: 'passive', Group: 'Family', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Monumen Nasional'},
    {id: 4, actType: 'in', locStatus: 'passive', Group: 'Group', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Monumen Nasional'},
    {id: 5, actType: 'out', locStatus: 'active', Group: 'Solo', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kota Tua'},
    {id: 6, actType: 'out', locStatus: 'active', Group: 'Couple', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kota Tua'},
    {id: 7, actType: 'out', locStatus: 'active', Group: 'Family', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kota Tua'},
    {id: 8, actType: 'out', locStatus: 'active', Group: 'Group', attrType: 'Sejarah', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kota Tua'},
    {id: 9, actType: 'out', locStatus: 'active', Group: 'Solo', attrType: 'Other', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kebun Binatang Ragunan'},
    {id: 10, actType: 'out', locStatus: 'active', Group: 'Couple', attrType: 'Other', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kebun Binatang Ragunan'},
    {id: 11, actType: 'out', locStatus: 'active', Group: 'Family', attrType: 'Other', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kebun Binatang Ragunan'},
    {id: 12, actType: 'out', locStatus: 'active', Group: 'Group', attrType: 'Other', genre: 'Edukasi', spcPurpose: 'None', spcReq: 'None', place: 'Kebun Binatang Ragunan'},
    
];

app.get('/',(req,res) => {
    res.send('Welcome to API Toor Apps');
});

app.get('/api/findUs/',(req,res) => {
    res.send('Ngapain cari ini bray? Steam ya jelas gaada di sini lah.');
});

app.get('/api/listChoices', (req, res) => {
    res.send(listChoices);
});

app.post('/api/listChoices', (req,res) => {
    const Choice = {
        id: listChoices.length + 1,
        actType: req.body.actType
    };
    listChoices.push(Choice);
    res.send(Choice);
});

app.get('/api/listChoices/:id', (req, res) => {
    const Choice = listChoices.find(c => c.id === parseInt(req.params.id));
    if (!Choice) res.status(404).send('Sorry No ID Registered');
    res.send(Choice)//Error 404
});

app.listen(port, () => console.log(`listening on port ${port}`));