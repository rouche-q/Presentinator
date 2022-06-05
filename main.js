import { writePrompt } from './src/prompt.js'
import { keyHandler } from './src/keyHandler.js'

async function runTerminal() {
  const container = document.getElementById('terminal')
  const term = new Terminal({
    cursorBlink: true,
    cursorStyle: "bar",
    cursorWidth: 3,
    fontSize: 18,
    theme: {
      background: '#060606',
      cursor: '#c7157a',
      selection: '#c7157a',
      cursorAccent: '#c7157a',
      brightMagenta: '#c7157a',
      green: '#2ab025',
      brightGreen: '#2ab025',
      yellow: '#f2ca29',
      brightYellow: '#f2ca29',
      red: '#cf442b',
      brightRed: '#cf442b',
    }
  })

  const fitAddon = new window.FitAddon.FitAddon()
  term.loadAddon(fitAddon)
  term.loadAddon(new window.WebLinksAddon.WebLinksAddon())
  term.open(container)
  fitAddon.fit()

  term.focus()
  writePrompt(term)
  term.onKey(keyHandler(term))
  window,addEventListener('resize', () => {
    fitAddon.fit()
  })
}

window.onload = function () {
  runTerminal().catch(console.error);
};