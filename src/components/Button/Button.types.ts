import { MouseEventHandler, ReactNode, ReactPortal } from "react";
import {
  BUTTON_SHADOWS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./lib/sharedData";

export interface ButtonSize {
  type: (typeof BUTTON_SIZES)[number];
}

export type Text = string | ReactNode;

export type ButtonBorder = string | number;

export interface ButtonShadow {
  type: (typeof BUTTON_SHADOWS)[number];
}
export interface ButtonVariant {
  type: (typeof BUTTON_VARIANTS)[number];
}

export type Children =
  | string
  | ReactNode
  | ReactPortal
  | boolean
  | null
  | undefined;

export interface ButtonProps {
  /** Text can be string | Any React Node */
  text?: Text;

  /** Children can be string | Any React Node Element, if text props is provided Children will be ignored */
  children?: Children;

  /** If true, cursor is not-allowed and disabled */
  disabled?: boolean;

  /** Button size can be "xs" | "sm" | "md" | "lg" */
  size?: string;

  /** Button Border can be "xs" | "sm" | "md" | "lg" | Any number */
  border?: ButtonBorder;

  /** Button Shadow can be "xs" | "sm" | "md" | "lg" */
  shadow?: string;

  /** Button Shadow can only be string (hex, rgba, hsl) */
  bgColor?: string;

  /** Button Variant can be "contained" | "text" | "rounded" | "contained-hover-text" | "contained-hover-rounded" | "text-hover-contained" | "text-hover-rounded" */
  variant?: string;
  /** Handler for onClick */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
