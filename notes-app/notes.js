const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}



const addNote = (title, body) => {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title!==title)
    
    if(notes.length === duplicateNotes.length){
        console.log(chalk.bgRed('No note found'))
    }else{
        console.log(chalk.bgGreen('Note removed'))
    }
    saveNotes(duplicateNotes)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow("Your Notes"))
    for(note of notes){
        console.log(note.title)
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes
}