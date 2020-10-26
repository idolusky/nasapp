const express = require('express')
const router = express.Router()
const Image = require('./models/imageSchema')


router.get('/images', async function (req, res) {
    const favourites = await Image.find({})
    res.send(favourites)
})


router.post('/image', async function (req, res) {
    const favourite = new Image(req.body)
    await favourite.save()
    res.send(favourite)
})

router.put('/image/:id', async function (req, res) {
    const id = req.params.id
    const favourite = await Image.findOneAndDelete({ _id: id })
    res.send(favourite)
})
router.get('/images/:id', async function (req, res) {
    const id = req.params.id
    if (id) {
        const favourite = await Image.find({ _id: id })
        res.send(favourite)
    } else {
        const favourites = await Image.find({})
        res.send(favourites)
    }
})



module.exports = router;