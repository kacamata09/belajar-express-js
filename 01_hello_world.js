// bismillah coba express

// anshar

const express = require('express')

const app = express()

app.listen(2000, console.log('Ini adalah server express pertamaku, anshar'))

app.route('/')
    .get((requ, resp) => {
        resp.send('Hello Dunia ini adalah world')
    }) 