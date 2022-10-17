const express = require('express')
const ruteMahasiswa = require('./router/mahasiswa.js')

const app = express()
app.listen(3000, console.log('ini adalah server'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.use(ruteMahasiswa)

app.route('/')
    .get((requ, resp) => {
        const pesan = {halo:'ejs'}
        resp.render('pages/index.ejs', halo=pesan)
    })

app.route('/about')
    .get((requ, resp)=> {
        resp.render('pages/about.ejs')
    })