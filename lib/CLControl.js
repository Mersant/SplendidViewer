/* I find myself using ANSI escape codes a lot, so I made a little class to simplify controlling the user's terminal. */

// Command Line Control Class:
class clc {
    // Clear terminal screen
    CLS() {
        console.log('\u001bc');
    }

    // Reset text and styles to default
    RST() {
        console.log('\u001b[0m')
    }

    // Not supported by all terminals, set the foreground text to a specified RGB value
    SETRGB(r,g,b) {
        console.log('\u001b' + `[38;2;${r};${g};${b}m`);
    }
    // Set foreground text to predefined colors. These functions are more widely supporter than the SETRGB() function. If a message is specified, then it will log that message in the selected color then reset the text. This is useful if you just want to print a short message in a specific color without having to set and reset the text color.
    BLACK(msg = "") {
        console.log('\u001b[30m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    RED(msg = "") {
        console.log('\u001b[31m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    GREEN(msg = "") {
        console.log('\u001b[32m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    GREEN(msg = "") {
        console.log('\u001b[32m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    YELLOW(msg = "") {
        console.log('\u001b[33m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BLUE(msg = "") {
        console.log('\u001b[34m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    MAGENTA(msg = "") {
        console.log('\u001b[35m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    CYAN(msg = "") {
        console.log('\u001b[36m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    WHITE(msg = "") {
        console.log('\u001b[37m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }

    // Background colors
    BGBLACK(msg = "") {
        console.log('\u001b[40m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGRED(msg = "") {
        console.log('\u001b[41m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGGREEN(msg = "") {
        console.log('\u001b[42m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGYELLOW(msg = "") {
        console.log('\u001b[43m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGBLUE(msg = "") {
        console.log('\u001b[44m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGMAGENTA(msg = "") {
        console.log('\u001b[45m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGCYAN(msg = "") {
        console.log('\u001b[46m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGWHITE(msg = "") {
        console.log('\u001b[47m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    
    BOLD() {
        console.log('\u001b[1m');
    }
    BOLDOFF() {
        console.log('\u001b[22m');
    }
    // FAINT() has spotty support compared to BOLD()
    FAINT() {
        console.log('\u001b[2m');
    }
    FAINTOFF() {
        console.log('\u001b[22m');
    }

    UNDERLINE() {
        console.log('\u001b[4m');
    }
    UNDERLINEOFF() {
        console.log('\u001b[24m');
    }

    BLINK() {
        console.log('\u001b[5m');
    }
    BLINKOFF() {
        console.log('\u001b[25m');
    }

    REVERSE() {
        console.log('\u001b[7m');
    }
    REVERSEOFF() {
        console.log('\u001b[27m');
    }

    STRIKETHROUGH() {
        console.log('\u001b[9m');
    }
    STRIKETHROUGHOFF() {
        console.log('\u001b[29m');
    }

}
module.exports = clc;