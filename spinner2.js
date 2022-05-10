let spinnerArray = ["\r|     ", "\r/     ", "\r-     ", "\r\\     ", "\r|     ", "\r/      ", "\r-     ", "\r\\     ", "\r|     "]
let delay = 100
for (let line of spinnerArray) {
//console.log(line)
  setTimeout(() => {
  process.stdout.write(line)

}, delay)
delay += 200
}
