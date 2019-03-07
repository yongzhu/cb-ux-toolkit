export class Theme {
  public static AnchorBlue = {
    hex: "#182642",
    rgb: "24, 38, 66"
  };
  public static Azure = {
    hex: "#287AB9",
    rgb: "40, 122, 185"
  };
  public static Azure2 = {
    hex: "#1280A1",
    rgb: "7, 50, 63"
  };
  public static Marigold = {
    hex: "#FDB816",
    rgb: "253, 184, 22"
  };
  public static Emerald = {
    hex: "#009B74",
    rgb: "0, 155, 116"
  };
  public static SkyBlue = {
    hex: "#09A0DB",
    rgb: "9, 160, 219"
  };
  public static Lime = {
    hex: "#85CE3F",
    rgb: "133, 206, 63"
  };
  public static Red = {
    hex: "#DD4D39",
    rgb: "221, 77, 57"
  };
  public static Teal = {
    hex: "#63C0B9",
    rgb: "99, 192, 185"
  };
  public static Orange = {
    hex: "#E78523",
    rgb: "231, 133, 35"
  };
  public static DarkGray = {
    hex: "#555",
    rgb: "85, 85, 85"
  };
  public static MidGray = {
    hex: "#9a9a9a",
    rgb: "154, 154, 154"
  };
  public static Gray = {
    hex: "#F4F4F4",
    rgb: "244, 244, 244"
  };
}

export const BackgroundTheme = [
  {
    border: "#AAAAAA",
    bg: "#F1F1F1",
    msg: "Lightest",
    rgb: "rgb(241, 241, 241)"
  },
  {
    border: "#AAAAAA",
    bg: "#E4E4E4",
    msg: "Light (Default)",
    rgb: "rgb(228, 228, 228)"
  },
  {
    border: "#AAAAAA",
    bg: "#D2D2D2",
    msg: "Dark",
    rgb: "rgb(210, 210, 210)"
  }
];

export enum BgThemeEnum {
  Lightest,
  Light,
  Dark
}
