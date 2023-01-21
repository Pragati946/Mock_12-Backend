const express = require('express');
const route = express.Router();
const UserSchema = require("./user.model");
route.get('/getProfile', async function (req, res) {
    const { email } = req.body;
    const user = await UserSchema.findOne({ email });
    res.send(user);
});
route.post('/login', async function (req, res) {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (user) {
        if (user.password == password) {
            res.send("Successfully logged in");
        } else {
            res.send("Passwords does not match");
        }
    } else {
        res.send("Email does not exist");
    }
    res.send("LOGIN");
});
route.post('/signup', async function (req, res) {
    const { email, username, password } = req.body;
    const user = await UserSchema.create({ email: email, username: username, password: password })
    user.save();
    res.send("Successfully signed up");
});
route.post('/calculate', function (req, res) {
    const { amount, interest, years } = req.body;
    const i=interest/100
    const TotalMaturityValue = amount*((((1+i)**years)-1)/i);
    const TotalInvestmentAmount = amount*years;
    const TotalInterestGain = TotalMaturityValue - TotalInvestmentAmount;

    
    res.send({TotalMaturityValue,TotalInvestmentAmount,TotalInterestGain});
});
module.exports = route;
