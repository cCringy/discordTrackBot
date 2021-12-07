const Discord = require('discord.js')
const fs = require('fs')
const example = require('example.js')

const config = JSON.parse(fs.readFileSync('config.json','utf-8'))
var client = new Discord.Client() 


var cmdmap = {
    start : cmd_start,
    say   : cmd_say,
    test  : cmd_ping
}
//commands
function cmd_say(msg, args){

}

function cmd_ping(msg){
    client.send(msg);
}

function cmd_start(){
    
}

client.on(ready,() =>{
    console.log(`logged in as ${client.user.username}...`)
})

client.on('message',(msg) =>{
    let content = msg.content,
        author  = msg.author,
        channel = msg.channel,
        guild   = msg.guild

    if(author.id != client.user.id && cont.startsWith(config.prefix)){
        let invoke = cont.split(' ')[0].substring(config.prefix.length),
            args   = cont.slit(' ').slice(1);
        
        console.log(invoke,args)
    }
})

client.login(config.token)