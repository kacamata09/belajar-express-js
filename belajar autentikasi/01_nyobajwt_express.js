// nyoba jwt express bandingkan ama flask

const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())
app.listen(4000, console.log('server sekarang sedang berjalan di port 4000'))

const secret_key = 'hacker, kalau bisa jangan menyerang'

app.route('/')
    .get((requ, resp) => {
        resp.json({
            message:'ini halaman home'
        })
    })


app.post('/login', (requ, resp) => {
    const user = {
        id:1,
        username:'anshar',
        password:'anshar'
    }
    jwt.sign(user, secret_key, (err, token) => {
        if (err) {
            console.log(err)
            resp.sendStatus(401)
            return 
        }
        const Tokenjwt = token
        resp.json({
            user:user,
            token: Tokenjwt
        })
    })
})

