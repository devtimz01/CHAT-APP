const express = require('express');
const User= require('../model/userSchema');
const jwt = require('jsonwebtoken');

//signup logic goesin here
export const register =async()=>{
    const{username,password,image} = req.body;
    const existingUSer = await User.findOne({username});
    if(existingUSer){
        return res.status(401).send('username already exists');
    }
    else{
        const user = new User.create({
            username,
            password,
            image
        })
        await user.save();
        const token = jwt.sign({
            user: user.username,
            id: user._id
        },{expiresAt:'7d'});
        //user helper functions to handle successful or failed responses
        return res.status(201).json({
            user,
            token //jwtAuth
        })
    }
};
//login in signedup users go in here
export const login=async(req,res)=>{
    const{username, password,email}= req.body;
      
}


