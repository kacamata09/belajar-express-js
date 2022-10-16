const express = require('express')

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:true}))

mahasiswa = [
    {nama:'anshar', jurusan:'informatika'}
]

router.route('/mahasiswa')
    .get((requ, resp) => {
        resp.send('ini adalah halaman mahasiswa')
    })
    .post((requ, resp) => {
        mahasiswa.push(requ.body)
        resp.send({'ini adalah halaman post mahasiswa': mahasiswa})
    })

module.exports = router


