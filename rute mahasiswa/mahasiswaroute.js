const express = require('express')

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:true}))

let mahasiswa = [
    {id:1, nama:'anshar', jurusan:'informatika'},
    {id:2, nama:'si otong', jurusan:'manajemen'},
    {id:3, nama:'si odah', jurusan:'memasak'}
]

router.route('/mahasiswa')
    .get((requ, resp) => {
        resp.send('ini adalah halaman mahasiswa')
    })
    .post((requ, resp) => {
        mahasiswa.push(requ.body)
        resp.send({'ini adalah halaman post mahasiswa': mahasiswa})
    })
    .put((requ, resp) => {

    })

router.route('/mahasiswa/:id')
    .get((requ, resp) => {
        let getMhs = mahasiswa.filter((mhs) => mhs.id == requ.params.id)
        mhs = getMhs[0]
        console.log(mhs)
        resp.send(`ini adalah mahasiswa dengan nama ${mhs.nama} dengan jurusan ${mhs.jurusan}`)
    })
    // .post((requ, resp) => {
        //     mahasiswa.push(requ.body)
    //     resp.send({'ini adalah halaman post mahasiswa': mahasiswa})
    // })
    .put((requ, resp) => {
        let getMhs = mahasiswa.filter((mhs) => mhs.id == requ.params.id)
        mhs = getMhs[0]
        mhs.nama = requ.body.nama
        mhs.jurusan = requ.body.jurusan
        resp.send(mahasiswa)
    })
    .delete((requ, resp) => {
        mahasiswa = mahasiswa.filter(mhs => mhs.id != requ.params.id)
        console.log(mahasiswa)
        resp.send('berhasil menghapus si mahasiswa')
    })

module.exports = router



