const express = require('express');
const req = require('express/lib/request');
const { send } = require('express/lib/response');
const res = require('express/lib/response');
const { func } = require('joi');
const app = express();
const Joi = require('joi');

app.use(express.json());

const port = process.env.PORT || 3000;

const listChoices = [
  {
    id: 1,
    kelompok_wisata: "Museum",
   jenis_lokasi: "Indoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Sejarah",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Modern",
    rating: 0
  },
  {
    id: 2,
    kelompok_wisata: "Museum",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Sejarah",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Modern",
    rating: 0
  },
  {
    id: 3,
    kelompok_wisata: "Taman Bersejarah",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Sejarah",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Wawasan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Modern",
    rating: 0
  },
  {
    id: 4,
    kelompok_wisata: "Cagar Budaya",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Budaya",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 5,
    kelompok_wisata: "Museum",
   jenis_lokasi: "Indoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Budaya",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 6,
    kelompok_wisata: "Cagar Budaya",
   jenis_lokasi: "Indoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Pasif",
    jenis_wisata: "Budaya",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Hiburan",
    budget: "<25.000",
    hobi: "Menganalisis",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 7,
    kelompok_wisata: "Suaka Alam",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<150.000",
    hobi: "Animal Lovers",
    golongan_wisata: "Modern",
    rating: 0
  },
  {
    id: 8,
    kelompok_wisata: "Pulau",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Air",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Honeymoon",
    budget: "<400.000",
    hobi: "Snorkeling",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 9,
    kelompok_wisata: "Pantai",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Air",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Hiburan",
    budget: "<25.000",
    hobi: "Snorkeling",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 10,
    kelompok_wisata: "Air Terjun",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Air",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Relaksasi",
    tujuan_khusus: "Hiburan",
    budget: "<150.000",
    hobi: "Lintas alam",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 11,
    kelompok_wisata: "Gunung",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Adrenaline Addict",
    budget: "<150.000",
    hobi: "Hiking",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 12,
    kelompok_wisata: "Suaka Alam",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<55.000",
    hobi: "Pencinta Alam",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 13,
    kelompok_wisata: "Suaka Alam",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Edukasi",
    tujuan_khusus: "Wawasan",
    budget: "<400.000",
    hobi: "Animal Lovers",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 14,
    kelompok_wisata: "Suaka Alam",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Hiburan",
    budget: "<150.000",
    hobi: "Pencinta Alam",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 15,
    kelompok_wisata: "Suaka Alam",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Wawasan",
    budget: "<55.000",
    hobi: "Pencinta Alam",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 16,
    kelompok_wisata: "Camp Ground",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Hiburan",
    budget: "<400.000",
    hobi: "Camping",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 17,
    kelompok_wisata: "Camp Ground",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Adrenaline Addict",
    budget: "<400.000",
    hobi: "Camping",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 18,
    kelompok_wisata: "Camp Ground",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Hiburan",
    budget: "<400.000",
    hobi: "Camping",
    golongan_wisata: "Modern",
    rating: 0
  },
  {
    id: 19,
    kelompok_wisata: "Camp Ground",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Relaksasi",
    tujuan_khusus: "Meditasi",
    budget: "<400.000",
    hobi: "Camping",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  },
  {
    id: 20,
    kelompok_wisata: "Camp Ground",
   jenis_lokasi: "Outdoor",
    tipe_wisata: "Darat",
    jenis_kegiatan: "Aktif",
    jenis_wisata: "Alam",
    jenis_rekreasi: "Rekreasi",
    tujuan_khusus: "Adrenaline Addict",
    budget: "<400.000",
    hobi: "Camping",
    golongan_wisata: "Tradisional / Alami",
    rating: 0
  }
];

app.get('/',(req,res) => {
    res.send('Welcome to API Toor Apps');
});

app.get('/api/findUs/',(req,res) => {
    res.send('This page is empty. Perhaps you could add into this');
});

app.get('/api/listChoices', (req, res) => {
    res.send(listChoices);
});

app.put('/api/listChoices/:id',(req,res) => {
   const { id } = req.params;
   const { kelompok_wisata,jenis_lokasi,tipe_wisata } = req.body;

   const updateSpecies = listChoices.find((Choice) => Choice.id === id);

   if(kelompok_wisata) Choice.kelompok_wisata = kelompok_wisata;
   if(jenis_lokasi) Choice.jenis_lokasi = jenis_lokasi;
   if(tipe_wisata) Choice.tipe_wisata = tipe_wisata;

   send.res(`User ${id} updated`);

  });

app.delete('/api/listChoices/:id',(req,res) => {
  const Choice = listChoices.find(c => c.id === parseInt(req.params.id));
  if (!Choice) res.status(400).send('Given ID is not exist');

  const index = listChoices.indexOf(Choice);
  listChoices.splice(index, 1);

  res.send(Choice);
});

app.post('/api/listChoices/', (req,res) => {
  const Choice = req.body;

  listChoices.push(Choice);

  res.send(`Data added to Kelompok Wisata - "${Choice.kelompok_wisata}" to database`);
});

app.get(`/api/listChoices/:id`, (req, res) => {
    const Choice = listChoices.find(c => c.id === parseInt(req.params.id));
    if (!Choice) res.status(404).send('Sorry No Year Registered');
    res.send(Choice)
});

app.listen(port, () => console.log(`listening on port ${port}`));

function validateChoice(Choice){
  const schema = {
    jenisLokasi: Joi.string().min(6).required()
  };

  return Joi.validate(Choice, schema);
}