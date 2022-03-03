const Items = require('../models/item')

var id = 0

module.exports = function(app) {
    app.post('/items/add', async (req, res, next) => {
        id += 1
        const new_item = {
            id: id,
            name: req.body.item.name,
            description: req.body.item.description,
            email: req.body.item.email,
            cost: req.body.item.cost
        }
        Items.create(new_item, (err, items) => {
            console.log(err)
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            })
            res.send([])
        }).then(doc => {
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            })
            res.send([new_item])
        })
    });

    app.get('/items', async (req, res, next) => {
        console.log("OK")
        Items.find({}).then(doc => {
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            })
            res.send(doc)
        })
    });
};