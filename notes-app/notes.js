const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your Notes...'
}



const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body:body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added"))
    }else{
        console.log(chalk.red.inverse("Title already taken"))
    }
   
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title!==title)
    
    if(notes.length === duplicateNotes.length){
        console.log(chalk.bgRed('No note found'))
    }else{
        console.log(chalk.bgGreen('Note removed'))
    }
    saveNotes(duplicateNotes)
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes
}