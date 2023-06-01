const NoteController = require('../controllers/Note.controller');

module.exports = (app) => {
    app.post('/api/Notes', NoteController.createNote)
    app.get('/api/getAll', NoteController.allNotes)
    app.get('/api/selectOneNote/:id', NoteController.getOneNote)
    app.put('/api/addNote/:id', NoteController.addNote)
    app.delete('/api/deleteNote/:id', NoteController.deleteNote) 
}