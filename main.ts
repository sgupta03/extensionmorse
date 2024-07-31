let MORSE_CODE: { [key: string]: string } = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '0': '-----', ' ': ' '
}

function playDot() {
    music.ringTone(880)
    basic.pause(200)
    music.rest(100)
}

function playDash() {
    music.ringTone(880)
    basic.pause(600)
    music.rest(100)
}

function sendMorseCode(message: string) {
    for (let char of message) {
        let morse = MORSE_CODE[char] || MORSE_CODE[char.toUpperCase()] || ''
        for (let symbol of morse) {
            if (symbol == '.') {
                playDot()
            } else if (symbol == '-') {
                playDash()
            }
            basic.pause(200)
        }
        basic.pause(600) // Space between letters
    }
}

input.onButtonPressed(Button.A, function () {
    sendMorseCode("hello")
})
