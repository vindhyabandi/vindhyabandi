const express = requires('express');
const Customer = required('../models/customer')
const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const User = await User.login(req.body.username, req.body.password);
        res.send({...users, password, undefined} );
    } catch (error) {
        res.status(401).send({messages:error.message});
    }
});
router.post('/register', async(req, res) => {
    try {
        const User = await User.register(req.body);
        res.send({...users, password, undefined} );
    } catch (error) {
        res.status(401).send({messages:error.message});
    }
});


module.exports = router;