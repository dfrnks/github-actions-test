const core = require("@actions/core")
const github = require("@actions/github")

try {
    throw new Error("error message")
    
    const name = core.getInput('who-are-you')

    console.log(`Hello, ${name}`)
    
    const time = new Date();
    
    core.setOutput("time", time.toTimeString())
    
    console.log(JSON.stringify(github, null, '\t'))    
} catch(error) {
    core.setFailed('Deu erro, tente novamente mais tarde')
    core.setFailed(error)
}
