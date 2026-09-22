const { log } = require("console");
const jwt = require("jsonwebtoken");
const { decode } = require("punycode");

const token = jwt.sign({ username: "menac", userid: 1}, "123#45$%66^^", {
   expireIn: "60s",
});

const oldToken = 'eotyijroykjbrtkjgj45kj59FSf455.sfisofihrkjbfrhGG5'

