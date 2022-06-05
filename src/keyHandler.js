import { exec } from "./exec.js"
import { writePrompt } from "./prompt.js"

const pressEnter = (term, cmd, domEvent) => {
    if (domEvent.keyCode == 13) {
        if (cmd.length != 0) {
            cmd = cmd.trim()
            exec(term, cmd)
        }
        term.write('\r\n')
        writePrompt(term)
        cmd = ''
    }
    return cmd
}

const pressBackspace = (term, cmd, domEvent) => {
    if (domEvent.keyCode == 8) {
        if (cmd.length > 0) {
            cmd = cmd.substring(0, cmd.length - 1)
            term.write('\b \b') 
        }
    }
    return cmd
}

const keyHandler = (term) => {
    let cmd = ''
    return ({key, domEvent}) => {
        let printable = (!domEvent.altKey && domEvent.keyCode != 13 && domEvent.keyCode != 8 && !domEvent.ctrlKey && !domEvent.metaKey)
        console.log(domEvent)
        if(domEvent.keyCode === 9 || domEvent.keyCode === 91 || (domEvent.keyCode >= 37 && domEvent.keyCode <= 40) || (domEvent.keyCode >= 112 && domEvent.keyCode <= 143)) {
            return;
          }
        cmd = pressEnter(term, cmd, domEvent)
        cmd = pressBackspace(term, cmd, domEvent) 
        console.log(cmd.length)
        if (printable) {
            term.write(key)
            cmd = cmd + key
        }
    }
}

export {keyHandler}