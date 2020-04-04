const fs = require('fs')

let application = fs.readFileSync('./application.yml','utf8')
application = application.replace('DYNAMICPORT-CHANGEME',process.env.PORT)
if(process.env.PASS){
	application = application.replace('youshallnotpass',process.env.PASS)
}
fs.writeFileSync('./application.yml', application)

const exec = require('child_process').exec;
const childProcess = exec('java -jar Lavalink.jar', function(err, stdout, stderr) {
    if (err) {
        console.log(err)
    }
    console.log(stdout)
})
