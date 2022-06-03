const promptColors = {
    red: '\x1B[1;31m',
    green: '\x1B[1;32m',
    magenta: '\x1B[1;35m',
    reset: '\x1B[0m',
    bold: '\x1B[1m'
}

const writePrompt = (term) => {
    term.write("anonymous@kuruje.xyz " + promptColors.green + "\u2192 " + promptColors.reset)
}

export {writePrompt, promptColors}