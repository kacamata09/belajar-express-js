const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 4000
const text = `Server ini sekarang berjalan di port ${port}`

app.listen(port, console.log(text))

app.route('/')
    .get((requ, resp)=> {
        resp.send('ini adalah halaman home')
    })

app.route('/mahasis')

