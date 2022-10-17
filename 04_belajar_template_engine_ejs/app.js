const express = require('express')

const app = express()
app.listen(3000, console.log('ini adalah server'))
app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

app.route('/')
    .get((requ, resp) => {
        const pesan = {halo:'ejs'}
        resp.render('pages/index.ejs', halo=pesan)
    })

app.route('/about')
    .get((requ, resp)=> {
        resp.render('pages/about.ejs')
    })