import { writePrompt } from "./prompt.js"

const help = (term) => {
    term.write('\r\n')
    term.writeln('Available commands:')
    term.writeln('  help')
    term.writeln('  clear')
    term.writeln('  trapchat')
    term.writeln('  sendmeether')
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

const sendmeether = (term) => {
    term.write('\r\nsend me ether to this address: 0x683f239D8136e5dE5E2B6C6BE02214196fd6E5aB')
    term.write('\r\nhttps://etherscan.io/address/0x683f239D8136e5dE5E2B6C6BE02214196fd6E5aB')
}


export {help, clear, trapchat, whoami, sendmeether}