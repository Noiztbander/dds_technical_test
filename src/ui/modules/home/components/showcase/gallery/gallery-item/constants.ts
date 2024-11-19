export enum CardColorEnum {
  light_blue = "light_blue",
  pink = "pink",
  black = "black",
  dark_blue = "dark_blue",
}

export const CARD_COLOR = {
  [CardColorEnum.light_blue]: {
    background: "#460F25",
    secondary_color: "#B4CBDB",
  },
  [CardColorEnum.pink]: {
    background: "#E59CBA",
    secondary_color: "#460F25",
  },
  [CardColorEnum.black]: {
    background: "#080705",
    secondary_color: "#B4CBDB",
  },
  [CardColorEnum.dark_blue]: {
    background: "#282E46",
    secondary_color: "#B4CBDB",
  },
};

export const lightblueWords = ["architect", "photograph"];
export const pinkWords = ["print", "furniture", "deco", "book"];
export const blackWords = ["textile", "glass", "mixed", "metal"];
export const darkBlueWords = [
  "painting",
  "costume",
  "accessories",
  "wood",
  "drawing",
];
