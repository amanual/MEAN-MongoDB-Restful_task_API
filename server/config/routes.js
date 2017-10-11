var apis = require('../controllers/apis.js');
module.exports = function(app){
    //root route
    app.get('/api', function (req, res) {
        apis.show(req, res);
    })
    // Adding an Animal
    app.post('/api/create', function (req, res) {
        apis.create(req, res)
    })// find an Animal
    app.get('/api/:id', function (req, res) {
        apis.find(req, res)
    })
    // update an data
    app.put('/api/update/:id', function (req, res) {
        apis.update(req, res)
    })
    // delete an Animal
    app.delete('/api/destroy/:id', function (req, res) {
        apis.destroy(req, res)
    })

}