// import React, { useState } from 'react';
const express = require('express')
const router = express.Router();
const fetchuser = require('../middleWare/fetchuser');
const Note = require('../models/Chats');
const { body, validationResult } = require('express-validator');
const multer  = require('multer');
const  {React, useState } = require('react');
// route 1 getting all the chats logedin req
router.get('/fetchallchats',fetchuser,async (req,res)=>{
    try {
        const user = await Note.find({user: req.user.id})
        res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }    
    
})
let path = ""
let fName = ""
// route 3 getting all the global chats logedin req
router.get('/fetchallglobal',fetchuser,async (req,res)=>{
    try {
        const user = await Note.find({user: '64b51d1dc65a36ab65e6e38c'})
        res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }    
    
})

//Route 2:addind new chats  using post login req
router.post('/addchats',fetchuser,[
    body('discription'),
    body('font'),
    body('fontWeight'),
    body('fontStrick'),
    body('hyperLink'),
    body('codeSnippet'),
    body('codeBlock'),
    body('bulletList'),
    body('noList')
],async(req,res)=>{
    try {
        
    const {discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
        discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name,filePath:filePath,fileName:fName, user:req.user.id
    })
    const savedchats = await note.save()
    res.json(savedchats)
}catch (error) {
    console.log("failed to add")
    console.error(error.message)
    res.status(500).send("some error occured")
} 
})
//Route 4:addind new chats to global using post login req
router.post('/addglobal',fetchuser,[
    body('discription'),
    body('font'),
    body('fontWeight'),
    body('fontStrick'),
    body('hyperLink'),
    body('codeSnippet'),
    body('codeBlock'),
    body('bulletList'),
    body('noList')
],async(req,res)=>{
    try {
        
    const {discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
        discription,font,fontWeight,fontStrick,hyperLink,textLink,codeSnippet,codeBlock,bulletList,noList,name,filePath:filePath,fileName:fName, user:'64b51d1dc65a36ab65e6e38c'
    })
    const savedchats = await note.save()
    res.json(savedchats)
}catch (error) {
    console.error(error.message)
    res.status(500).send("some error occured")
} 
})
// file upload section
//1 destination for the file
// const fileName = `${Date.now()}-${file.originalname}`
let filePath = ""
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        filePath = `${Date.now()}-${file.originalname}`
        return cb(null,filePath)
    }
})

const upload = multer ({storage})

router.post('/addfile',upload.single('file'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    filePath = filePath
    fName = req.file.originalname
    return res.redirect('http://localhost:3000/')
})

module.exports = router