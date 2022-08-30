/* I find myself using ANSI escape codes a lot, so I made a little class to simplify controlling the user's terminal. */

// Command Line Control Class:
class clc {
    // Clear terminal screen
    CLS() {
        process.stdout.write('\u001bc');
    }

    // Reset text and styles to default
    RST() {
        process.stdout.write('\u001b[0m')
    }

    // Not supported by all terminals, set the foreground text to a specified RGB value
    SETRGB(r,g,b) {
        process.stdout.write('\u001b' + `[38;2;${r};${g};${b}m`);
    }
    // Set foreground text to predefined colors. These functions are more widely supporter than the SETRGB() function. If a message is specified, then it will log that message in the selected color then reset the text. This is useful if you just want to print a short message in a specific color without having to set and reset the text color.
    BLACK(msg = "") {
        process.stdout.write('\u001b[30m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    RED(msg = "") {
        process.stdout.write('\u001b[31m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    GREEN(msg = "") {
        process.stdout.write('\u001b[32m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    GREEN(msg = "") {
        process.stdout.write('\u001b[32m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    YELLOW(msg = "") {
        process.stdout.write('\u001b[33m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BLUE(msg = "") {
        process.stdout.write('\u001b[34m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    MAGENTA(msg = "") {
        process.stdout.write('\u001b[35m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    CYAN(msg = "") {
        process.stdout.write('\u001b[36m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    WHITE(msg = "") {
        process.stdout.write('\u001b[37m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }

    // Background colors
    BGBLACK(msg = "") {
        process.stdout.write('\u001b[40m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGRED(msg = "") {
        process.stdout.write('\u001b[41m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGGREEN(msg = "") {
        process.stdout.write('\u001b[42m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGYELLOW(msg = "") {
        process.stdout.write('\u001b[43m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGBLUE(msg = "") {
        process.stdout.write('\u001b[44m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGMAGENTA(msg = "") {
        process.stdout.write('\u001b[45m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGCYAN(msg = "") {
        process.stdout.write('\u001b[46m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    BGWHITE(msg = "") {
        process.stdout.write('\u001b[47m');
        if(msg != "") {
            console.log(msg);
            this.RST();
        }
    }
    
    BOLD() {
        process.stdout.write('\u001b[1m');
    }
    BOLDOFF() {
        process.stdout.write('\u001b[22m');
    }
    // FAINT() has spotty support compared to BOLD()
    FAINT() {
        process.stdout.write('\u001b[2m');
    }
    FAINTOFF() {
        process.stdout.write('\u001b[22m');
    }

    UNDERLINE() {
        process.stdout.write('\u001b[4m');
    }
    UNDERLINEOFF() {
        process.stdout.write('\u001b[24m');
    }

    BLINK() {
        process.stdout.write('\u001b[5m');
    }
    BLINKOFF() {
        process.stdout.write('\u001b[25m');
    }

    REVERSE() {
        process.stdout.write('\u001b[7m');
    }
    REVERSEOFF() {
        process.stdout.write('\u001b[27m');
    }

    STRIKETHROUGH() {
        process.stdout.write('\u001b[9m');
    }
    STRIKETHROUGHOFF() {
        process.stdout.write('\u001b[29m');
    }

}
module.exports = clc;