const {Router} = require('express');
const router = Router();

router.get('/api/users', (req, res) => {
    res.json('User list');
});

module.exports = router;