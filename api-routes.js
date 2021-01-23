let router = require('express').Router();
var blogController = require('./blogController');

router.get('/', (req,res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    })
});

router.route('/contacts')
    .get(blogController.index)
    .post(blogController.new);

router.route('/contacts/:contact_id')
    .get(blogController.view)
    .patch(blogController.update)
    .put(blogController.update)
    .delete(blogController.delete);

module.exports = router;