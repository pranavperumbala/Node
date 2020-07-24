const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')


const command = process.argv[2]

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, 
            type:'string'           
        },
        body: {
            describe:'Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            descibe:'Delete a note',
            demandOption:true,
            type:'string'
        }       
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    handler(){
        console.log("Reading a note")
    }
})

yargs.parse();

