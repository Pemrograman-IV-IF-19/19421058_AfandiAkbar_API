const { model } = require('mongoose')
const modelBarang = require('../model/barangModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.inputBarang = (data) =>
    new Promise(async(resolve, reject) => {
        await modelBarang.create(data)
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Membuat Barang'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })

exports.getAllBarang = () =>
    new Promise(async(resolve, reject) => {
        modelBarang.find({})
            .then(dataBarang => {
                if (dataBarang.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil Memuat Data',
                        data: dataBarang
                    })
                }else{
                    reject({
                        status: false,
                        msg: 'Tidak Ada Barang'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
    })

exports.getBarangByName = (name) =>
    new Promise(async(resolve, reject) => {
        modelBarang.findOne({ namaBarang: name })
            .then(dataBarang => {
                if (dataBarang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil Memuat Data',
                        data: dataBarang
                    })
                }else{
                    reject({
                        status: false,
                        msg: 'Tidak Ada Barang' + name
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
})


exports.updateBarang = (id, data) =>
    new Promise(async(resolve, reject) => {
        modelBarang.updateOne({ _id: objectId(id) }, data)
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Merubah data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })

exports.deleteBarang = (id) =>
    new Promise(async(resolve, reject) => {
        modelBarang.deleteOne({ _id: objectId(id) })
            .then(() => {
                resolve ({
                    status: true,
                    msg: 'Berhasil Menghapus data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan pada Server'
                })
            })
    })