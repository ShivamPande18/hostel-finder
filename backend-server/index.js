const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    console.log("db connected");
}

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post("/user", async (request, response) => {
    const docs = await User.find({ fullName: request.body.fullName });
    response.json(docs);

});

server.post("/login", async (request, response) => {
    const docs = await User.find({ email: request.body.email, password: request.body.password });
    response.json(docs);

});

server.post("/demo", async (request, response) => {
    let user = new User();
    //request = comes from frontend
    user.fullName = request.body.fullName;
    user.email = request.body.email;
    user.password = request.body.password;
    // console.log(request.body);
    const doc = await user.save();


    console.log(doc);
    response.json(doc);
});

server.get("/demo", async (request, response) => {
    const docs = await User.find({});
    response.json(docs);
});

server.listen(8080,() => {
    console.log("server started");
});