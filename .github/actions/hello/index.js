const core = require("@actions/core")
const github = require("@actions/github")
const { countReset } = require("console")
const { connected } = require("process")

try {
    // throw new Error("error message")

    core.debug('Some debug messagem')

    core.warning('Warning message')

    core.error('Error message')

    const name = core.getInput('who-are-you')

    core.setSecret(name)

    console.log(`Hello, ${name}`)
    
    const time = new Date();
    
    core.setOutput("time", time.toTimeString())

    core.startGroup('Logging github object')

    console.log('This is a group')
    
    console.log(JSON.stringify(github, null, '\t'))

    console.log('This is a end of a group')

    core.endGroup()

    core.exportVariable("HELLO", 'hello')

} catch(error) {
    core.setFailed('Deu erro, tente novamente mais tarde')
    core.setFailed(error)
}
