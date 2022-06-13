const controllerBarang = require('../controller/barangController')
const router = require('express').Router()


router.post('/input-barang', (req, res) => {
    controllerBarang.inputBarang(req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-barang', (req, res) => {
    controllerBarang.getAllBarang()
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-barang/:namaBarang', (req, res) => {
    controllerBarang.getBarangByName(req.params.namaBarang)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.put('/update-barang/:id', (req, res) => {
    controllerBarang.updateBarang(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete-barang/:id', (req, res) => {
    controllerBarang.deleteBarang(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = router