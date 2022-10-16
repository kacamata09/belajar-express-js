
const express = require('express')
const mahasiswaRute = require('./rute mahasiswa/mahasiswaroute.js')


const app = express()
app.listen(4000, console.log('ini adalah server yang berjalan di port 4000'))

app.use(mahasiswaRute)

app.route('/')
    .get((requ, resp) => {
        resp.send('ini adalah home')
    })

