export type IconsId =
  | "logo-aj";

export type IconsKey =
  | "LogoAj";

export enum Icons {
  LogoAj = "logo-aj",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.LogoAj]: "61697",
};
