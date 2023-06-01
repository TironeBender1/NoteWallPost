const { response } = require("express");
const Note = require("../models/Note.model");

module.exports = {
    allNotes: (req,res) => {
        Note.find()
            .then((allNotes) => {
                // console.log(allNotes)
                res.json(allNotes)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOneNote: (req, res) => {
        Note.findOne({ _id: req.params.id})
            .then((oneNote) => {
               console.log(oneNote) 
                res.json(oneNote)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    
    addNote: (request, response) => {
        console.log('PARAMS*********', request.body, request.params)
        Note.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedNote => {console.log(updatedNote) 
            response.json(updatedNote)})
        .catch(err => response.json(err))
        
    }, 
    deleteNote: (req, res) => {
        Note.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        },
        
    createNote: (req, res) => {
        console.log("Do YOU SEE ME NOW",req.body)
        Note.create(req.body)
        .then((newNote) => {console.log('newNote', newNote); res.json(newNote)})
        .catch((err) => res.status(500).json(err))
    }
};