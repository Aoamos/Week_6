const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },
  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },
  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },
  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },
  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },
  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },
  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },
  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },
  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },
];

// API
app.get("/drugs/antibiotics", (req, res) => {
  const antibiotics = drugs.filter((drug) => drug.category === "Antibiotic");
  res.send(antibiotics);
});
