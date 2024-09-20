const bcruyt = require('bcryptjs');
const userModel = require('../models/userModel')

const registerUser = async(req,res)=> {
    const { usernmae, email, first_name, last_name, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser({ username, email, first_name, last_name});
        res.status(201).json({ message: `User registered successfully`, user: newUser});
    }catch (error) {
        res.status(500).json({message: `Error registering user`, error})
    }
};

const loginUser = async(req,res) => {
    const { username, password} = req.body;

    try{
        const user = await userModel.getUserByUsername(username);

        if(user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({message: `Login successful`, user});
        } else {
            res.status(400).json({message: `Invalie credentials`});
        }
    }catch (error) {
        res.status(500).json({message: `Error logging in`, error});
    }
};

const getAllUsers = async (req, res)=> {
    try {
        const users = await userModel.getALLUsers();
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({message: `Error fetching users`, error})
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.getUserById(id);
        if(user){
            res.status(200).json(user);
        }else {
            res.status(404).json({ message: 'User not found' })
        }
    }
}