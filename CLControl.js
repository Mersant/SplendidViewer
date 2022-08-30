/* I find myself using ANSI escape codes a lot, so I made a little class to simplify controlling the user's terminal. */

// Command Line Control Class:
class clc {
    // Clear terminal screen
    CLS() {
        console.log('\u001bc');
    }

    // Reset text and styles to default
    RST() {
        console.log('\u001b0m')
    }

    // Not supported by all terminals, set the foreground text to a specified RGB value
    SETRGB(r,g,b) {
        console.log('\u001b' + `[38;2;${r};${g};${b}m`);
    }

    BOLD() {
        console.log('\u001b1m');
    }
    BOLDOFF() {
        console.log('\u001b22m');
    }

    FAINT() {
        console.log('\u001b2m');
    }
    FAINTOFF() {
        console.log('\u001b22m');
    }

    UNDERLINE() {
        console.log('\u001b4m');
    }
    UNDERLINEOFF() {
        console.log('\u001b24m');
    }

    BLINK() {
        console.log('\u001b5m');
    }
    BLINKOFF() {
        console.log('\u001b25m');
    }

    REVERSE() {
        console.log('\u001b7m');
    }
    REVERSEOFF() {
        console.log('\u001b27m');
    }

    STRIKETHROUGH() {
        console.log('\u001b9m');
    }
    STRIKETHROUGHOFF() {
        console.log('\u001b29m');
    }

}
module.exports = clc;