const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const Joi = require('Joi');

app.use(express.json());

const port = process.env.PORT || 3000;

const listChoices = [
    {
    id: 1,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Monumen Nasional"
  },
  {
    id: 2,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Monumen Nasional"
  },
  {
    id: 3,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Monumen Nasional"
  },
  {
    id: 4,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Monumen Nasional"
  },
  {
    id: 5,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kota Tua"
  },
  {
    id: 6,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kota Tua"
  },
  {
    id: 7,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kota Tua"
  },
  {
    id: 8,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kota Tua"
  },
  {
    id: 9,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Dll",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 10,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Dll",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 11,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Dll",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 12,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Dll",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 13,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Dll",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 14,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Dll",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 15,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Dll",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 16,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Dll",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kebun Binatang Ragunan"
  },
  {
    id: 17,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Fatahillah"
  },
  {
    id: 18,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Fatahillah"
  },
  {
    id: 19,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Fatahillah"
  },
  {
    id: 20,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Fatahillah"
  },
  {
    id: 21,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bank Indonesia"
  },
  {
    id: 22,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bank Indonesia"
  },
  {
    id: 23,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bank Indonesia"
  },
  {
    id: 24,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bank Indonesia"
  },
  {
    id: 25,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Tidung"
  },
  {
    id: 26,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Tidung"
  },
  {
    id: 27,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Tidung"
  },
  {
    id: 28,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Tidung"
  },
  {
    id: 29,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "Dunia Fantasi"
  },
  {
    id: 30,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "Dunia Fantasi"
  },
  {
    id: 31,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "Dunia Fantasi"
  },
  {
    id: 32,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "Dunia Fantasi"
  },
  {
    id: 33,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 34,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 35,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 36,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 37,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 38,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 39,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 40,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Ecopark"
  },
  {
    id: 41,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Masjid Istiqlal"
  },
  {
    id: 42,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Masjid Istiqlal"
  },
  {
    id: 43,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Masjid Istiqlal"
  },
  {
    id: 44,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Masjid Istiqlal"
  },
  {
    id: 45,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Gereja Katedral"
  },
  {
    id: 46,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Gereja Katedral"
  },
  {
    id: 47,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Gereja Katedral"
  },
  {
    id: 48,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Gereja Katedral"
  },
  {
    id: 49,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Atlantis Water Adventure"
  },
  {
    id: 50,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Atlantis Water Adventure"
  },
  {
    id: 51,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Atlantis Water Adventure"
  },
  {
    id: 52,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Atlantis Water Adventure"
  },
  {
    id: 53,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Sea World"
  },
  {
    id: 54,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Sea World"
  },
  {
    id: 55,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Sea World"
  },
  {
    id: 56,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Sea World"
  },
  {
    id: 57,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Wayang"
  },
  {
    id: 58,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Wayang"
  },
  {
    id: 59,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Wayang"
  },
  {
    id: 60,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Wayang"
  },
  {
    id: 61,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kidzania"
  },
  {
    id: 62,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Grand Indonesia Mall"
  },
  {
    id: 63,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Grand Indonesia Mall"
  },
  {
    id: 64,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Grand Indonesia Mall"
  },
  {
    id: 65,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Grand Indonesia Mall"
  },
  {
    id: 66,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "TMII"
  },
  {
    id: 67,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "TMII"
  },
  {
    id: 68,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "TMII"
  },
  {
    id: 69,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "TMII"
  },
  {
    id: 70,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pari"
  },
  {
    id: 71,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pari"
  },
  {
    id: 72,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pari"
  },
  {
    id: 73,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pari"
  },
  {
    id: 74,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pramuka"
  },
  {
    id: 75,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pramuka"
  },
  {
    id: 76,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pramuka"
  },
  {
    id: 77,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Pramuka"
  },
  {
    id: 78,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Harapan"
  },
  {
    id: 79,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Harapan"
  },
  {
    id: 80,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Harapan"
  },
  {
    id: 81,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Harapan"
  },
  {
    id: 82,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Ancol"
  },
  {
    id: 83,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Ancol"
  },
  {
    id: 84,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Ancol"
  },
  {
    id: 85,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Ancol"
  },
  {
    id: 86,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Dolphin"
  },
  {
    id: 87,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Dolphin"
  },
  {
    id: 88,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Dolphin"
  },
  {
    id: 89,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Dolphin"
  },
  {
    id: 90,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Macan"
  },
  {
    id: 91,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Macan"
  },
  {
    id: 92,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Macan"
  },
  {
    id: 93,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pulau Macan"
  },
  {
    id: 94,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Nasional"
  },
  {
    id: 95,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Nasional"
  },
  {
    id: 96,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Nasional"
  },
  {
    id: 97,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Nasional"
  },
  {
    id: 98,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Tekstil"
  },
  {
    id: 99,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Tekstil"
  },
  {
    id: 100,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Tekstil"
  },
  {
    id: 101,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Tekstil"
  },
  {
    id: 102,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Galeri Nasional Indonesia"
  },
  {
    id: 103,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Galeri Nasional Indonesia"
  },
  {
    id: 104,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Galeri Nasional Indonesia"
  },
  {
    id: 105,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Galeri Nasional Indonesia"
  },
  {
    id: 106,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bahari"
  },
  {
    id: 107,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bahari"
  },
  {
    id: 108,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bahari"
  },
  {
    id: 109,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bahari"
  },
  {
    id: 110,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Kebangkitan Nasional"
  },
  {
    id: 111,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Kebangkitan Nasional"
  },
  {
    id: 112,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Kebangkitan Nasional"
  },
  {
    id: 113,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Kebangkitan Nasional"
  },
  {
    id: 114,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Transportasi"
  },
  {
    id: 115,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Transportasi"
  },
  {
    id: 116,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Transportasi"
  },
  {
    id: 117,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Transportasi"
  },
  {
    id: 118,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bali Seni Rupa & Keramik"
  },
  {
    id: 119,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bali Seni Rupa & Keramik"
  },
  {
    id: 120,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bali Seni Rupa & Keramik"
  },
  {
    id: 121,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Budaya",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Bali Seni Rupa & Keramik"
  },
  {
    id: 122,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Satria Mandala"
  },
  {
    id: 123,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Satria Mandala"
  },
  {
    id: 124,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Satria Mandala"
  },
  {
    id: 125,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Satria Mandala"
  },
  {
    id: 126,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Polri"
  },
  {
    id: 127,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Polri"
  },
  {
    id: 128,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Polri"
  },
  {
    id: 129,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Polri"
  },
  {
    id: 130,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Planetarium & Observatorium"
  },
  {
    id: 131,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Planetarium & Observatorium"
  },
  {
    id: 132,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Planetarium & Observatorium"
  },
  {
    id: 133,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pasar Seni Ancol"
  },
  {
    id: 134,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pasar Seni Ancol"
  },
  {
    id: 135,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pasar Seni Ancol"
  },
  {
    id: 136,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pasar Seni Ancol"
  },
  {
    id: 137,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Marunda"
  },
  {
    id: 138,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Marunda"
  },
  {
    id: 139,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Marunda"
  },
  {
    id: 140,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Pantai Marunda"
  },
  {
    id: 141,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Waterbom PIK"
  },
  {
    id: 142,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Waterbom PIK"
  },
  {
    id: 143,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Waterbom PIK"
  },
  {
    id: 144,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Waterbom PIK"
  },
  {
    id: 145,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kelenteng Jin De Yuan"
  },
  {
    id: 146,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kelenteng Jin De Yuan"
  },
  {
    id: 147,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kelenteng Jin De Yuan"
  },
  {
    id: 148,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Religi",
    jenisRekreasi: "Relaksasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Kelenteng Jin De Yuan"
  },
  {
    id: 149,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Situ Lembang"
  },
  {
    id: 150,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Situ Lembang"
  },
  {
    id: 151,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Situ Lembang"
  },
  {
    id: 152,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Situ Lembang"
  },
  {
    id: 153,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Bunga Widya Mandala Krida Bakti Pramuka"
  },
  {
    id: 154,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Bunga Widya Mandala Krida Bakti Pramuka"
  },
  {
    id: 155,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Bunga Widya Mandala Krida Bakti Pramuka"
  },
  {
    id: 156,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Alam",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Bunga Widya Mandala Krida Bakti Pramuka"
  },
  {
    id: 157,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "BSD Xtrame Park"
  },
  {
    id: 158,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "BSD Xtrame Park"
  },
  {
    id: 159,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "BSD Xtrame Park"
  },
  {
    id: 160,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Adrenaline Addict",
    ketKhusus: "Tidak",
    wisata: "BSD Xtrame Park"
  },
  {
    id: 161,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Snow Bay Waterpark"
  },
  {
    id: 162,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Snow Bay Waterpark"
  },
  {
    id: 163,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Snow Bay Waterpark"
  },
  {
    id: 164,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Snow Bay Waterpark"
  },
  {
    id: 165,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Dream Samudra"
  },
  {
    id: 166,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Dream Samudra"
  },
  {
    id: 167,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Dream Samudra"
  },
  {
    id: 168,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Ocean Dream Samudra"
  },
  {
    id: 169,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Miniapolis Plaza Indonesia"
  },
  {
    id: 170,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Miniapolis Plaza Indonesia"
  },
  {
    id: 171,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Bundaran HI"
  },
  {
    id: 172,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Bundaran HI"
  },
  {
    id: 173,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Bundaran HI"
  },
  {
    id: 174,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Menteng"
  },
  {
    id: 175,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Menteng"
  },
  {
    id: 176,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Menteng"
  },
  {
    id: 177,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Menteng"
  },
  {
    id: 178,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Joang 45"
  },
  {
    id: 179,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Joang 46"
  },
  {
    id: 180,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Joang 47"
  },
  {
    id: 181,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Pasif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Edukasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Museum Joang 48"
  },
  {
    id: 182,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Ismail Marzuki"
  },
  {
    id: 183,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Ismail Marzuki"
  },
  {
    id: 184,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Ismail Marzuki"
  },
  {
    id: 185,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Ismail Marzuki"
  },
  {
    id: 186,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Proklamator"
  },
  {
    id: 187,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Proklamator"
  },
  {
    id: 188,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Proklamator"
  },
  {
    id: 189,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Sejarah",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Proklamator"
  },
  {
    id: 190,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Tribeca Mall Central Park"
  },
  {
    id: 191,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Tribeca Mall Central Park"
  },
  {
    id: 192,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Tribeca Mall Central Park"
  },
  {
    id: 193,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Taman Tribeca Mall Central Park"
  },
  {
    id: 194,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Magic Art 3D Museum Jakarta"
  },
  {
    id: 195,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Magic Art 3D Museum Jakarta"
  },
  {
    id: 196,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Magic Art 3D Museum Jakarta"
  },
  {
    id: 197,
    jenisLokasi: "Indoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Magic Art 3D Museum Jakarta"
  },
  {
    id: 198,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Solo",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Indraloka Family Park"
  },
  {
    id: 199,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berpasangan",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Indraloka Family Park"
  },
  {
    id: 200,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Berkeluarga",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Indraloka Family Park"
  },
  {
    id: 201,
    jenisLokasi: "Outdoor",
    jenisKegiatan: "Aktif",
    tipeKunjungan: "Kelompok",
    jenisWisata: "Modern",
    jenisRekreasi: "Rekreasi",
    spcPurpose: "Tidak ada",
    ketKhusus: "Tidak",
    wisata: "Indraloka Family Park"
  }
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

app.put('/api/listChoices/:id',(req,res) => {
  const Choice = listChoices.find(c => c.id === parseInt(req.params.id));
    if (!Choice) res.status(404).send('Sorry No ID Registered');
});

app.delete('/api/listChoices/:id',(req,res) => {
  
});

app.post('/api/listChoices', (req,res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  if(!req.body.actType || req.body.actType.length < 2) {
    res.status(400).send('Mohon Berikan Jenis Kegiatan yang benar');
    return;
  }

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