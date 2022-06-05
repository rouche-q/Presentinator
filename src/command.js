import { writePrompt } from "./prompt.js"

const help = (term) => {
    term.write('\r\n')
    term.writeln('Available commands:')
    term.writeln('  help')
    term.writeln('  clear')
    term.writeln('  trapchat')
    term.write('  whoami')
}

const clear = (term) => {
    term.clear()
}

const trapchat = (term) => {
    term.write('\r\nhttps://trapchat.com/')
    window.open('https://www.trapchat.fr/', '_blank').focus();
}

const whoami = (term) => {
    term.write('\r\nhttps://twitter.com/Kuuruje_')
}

export {help, clear, trapchat, whoami}