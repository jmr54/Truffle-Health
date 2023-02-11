const express = require('express');
const app = express();

const patient = require('./routes/patient');
app.use('/patient', patient);

app.listen(3000, ()=> console.log('Server working'));