const {Router} = require('express');
const router = Router();
const User = require('../models/User');

const faker = require('faker');

router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({users});
});

router.get('/api/users/create', async (req, res) => {
    for (let i = 0; i < 5; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: 'https://lh3.googleusercontent.com/proxy/qx5vnECPVCnx6aBo8XI-CBGAhFUo8uL7Clr0CAJbtfGmbKgsYcI3NaKW2VxA9SaagB-gcLcNGybT3RffKLeE7zwbpacF3_5dH0A6QQff0MyHcnHespWH',
        });
    }
    res.json({message: '5 Users created'});
});

module.exports = router;