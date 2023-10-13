import { Theme } from "@mui/material";

export type ThemeColor = {
  colors: Record<string, string>
}

export type ThemeFont = {
  fonts: Record<string, string>,
  fontWeights: Record<string, string>
}

export interface CustomTheme extends Theme, ThemeColor, ThemeFont { };