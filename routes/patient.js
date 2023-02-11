const express = require('express');
const router = express.Router();
router.use(express.json());

// Pre made patient here because database was not required. Refer this as 'database'
const patientList = [
    {"name": "Mike Thomas",
     "hosptialName" : "Multicare",
     "date" : "10/10/2022",
     "amount" : 1200   
    },
    {"name": "Jake Max",
    "hosptialName" : "Sweedish",
    "date" : "10/10/2023",
    "amount" : 200 
    },
    {"name": "Adam Salder",
    "hosptialName" : "St.Joesph",
    "date" : "05/15/2022",
    "amount" : 1000   
    },
]

// Getting all the patients info
router.get('/patientList', (req,res) => {
    res.send(patientList);
});

// Getting a certain patient's info and if patient does not exist will send 404 error
router.get('/:name', (req,res) => {
    const findPatient = patientList.find(patient => patient.name === String(req.params.name));
    if (! findPatient) res.status(404).send("Patient does not exist");
    res.send(findPatient);
});

// Posting a patient's info into our server
router.post('/', (req,res) => {
    const newPatient = {
        name : req.body.name,
        hospitalName : req.body.hospitalName,
        date : req.body.date,
        amount : req.body.amount
    };
    patientList.push(newPatient);
    res.send(newPatient)
})

module.exports = router