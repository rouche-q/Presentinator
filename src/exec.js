// import all commands from src/command.js
import { help, clear, trapchat, whoami } from './command.js'

const exec = (term, command) => {
    switch (command) {
        case 'help':
            help(term)
            break
        case 'clear':
            clear(term)
            break
        case 'trapchat':
            trapchat(term)
            break
        case 'whoami':
            whoami(term)
            break
        default:
            term.writeln(`\r\n${command} is not a valid command.`)
            term.write('Type "help" to see available commands.')
    }
}

export { exec }