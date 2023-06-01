const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note : {
        type: String,
        minlength: [2, 'More Please!']
    },
    
    body : {
        type: String,
        max: [255, 'Too many eggs'], 
         
    },

    // fontType : {
    //     type: Boolean,
    //     minlength: [null, 'Need more']
    // }
}, {timestamps: true})

const note = mongoose.model("note", noteSchema);

module.exports = note;