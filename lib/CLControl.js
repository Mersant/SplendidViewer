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
    // Set foreground text to predefined colors. These functions are more widely supporter than the SETRGB() function.
    BLACK() {
        console.log('\u001b[30m');
    }
    RED() {
        console.log('\u001b[31m');
    }
    GREEN() {
        console.log('\u001b[32m');
    }
    GREEN() {
        console.log('\u001b[32m');
    }
    YELLOW() {
        console.log('\u001b[33m');
    }
    BLUE() {
        console.log('\u001b[34m');
    }
    MAGENTA() {
        console.log('\u001b[35m');
    }
    CYAN() {
        console.log('\u001b[36m');
    }
    WHITE() {
        console.log('\u001b[37m');
    }

    // Background colors
    BGBLACK() {
        console.log('\u001b[40m');
    }
    BGRED() {
        console.log('\u001b[41m');
    }
    BGGREEN() {
        console.log('\u001b[42m');
    }
    BGYELLOW() {
        console.log('\u001b[43m');
    }
    BGBLUE() {
        console.log('\u001b[44m');
    }
    BGMAGENTA() {
        console.log('\u001b[45m');
    }
    BGCYAN() {
        console.log('\u001b[46m');
    }
    BGWHITE() {
        console.log('\u001b[47m');
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