const colorsReference = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  black: "\x1b[30m",
};

type Color = keyof typeof colorsReference;

class ColoredConsole {
  static [color: string]: (text: string) => void;
  constructor() {
    for (const color in colorsReference) {
      ColoredConsole[color as Color] = (text: string) => {
        console.log(colorsReference[color as Color], text);
      };
    }
  }
}

// Create an instance to generate the static methods
new ColoredConsole();

export { ColoredConsole };
