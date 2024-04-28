import styled, { css } from "styled-components";
import { ButtonBorder, ButtonProps } from "./Button.types";
import { primary, subtle } from "../shared/colors";

const calculateBorderWidth = (size: ButtonBorder) => {
  switch (size) {
    case "xs":
      return 0.5;
    case "sm":
      return 1;
    case "md":
      return 2;
    case "lg":
      return 3;
    default:
      return size;
  }
};

const calculatePadding = (size: string) => {
  switch (size) {
    case "xs":
      return "8px 10px";
    case "sm":
      return "12px 20px";
    case "md":
      return "16px 30px";
    case "lg":
      return "20px 40px";
    default:
      return "16px 30px";
  }
};

const calculateShadow = (size: string) => {
  switch (size) {
    case "xs":
      return "0 2px 4px rgba(0, 0, 0, 0.1)";
    case "sm":
      return "0 4px 6px rgba(0, 0, 0, 0.15)";
    case "md":
      return "0 6px 8px rgba(0, 0, 0, 0.2)";
    case "lg":
      return "0 8px 10px rgba(0, 0, 0, 0.25)";
    default:
      return "0 6px 8px rgba(0, 0, 0, 0.2)";
  }
};

const getStyleByVariant = ({
  variant,
  bgColor,
}: {
  variant: string;
  bgColor?: string;
}) => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${bgColor || primary};
      `;
    case "text":
      return css`
        background-color: transparent;
        &:hover {
          background-color: ${bgColor || subtle};
        }
      `;
    case "rounded":
      return css`
        border-radius: 49vh;
        background-color: ${bgColor || primary};
      `;
    case "contained-hover-text":
      return css`
        background-color: ${bgColor || primary};
        &:hover {
          background-color: transparent;
        }
      `;
    case "contained-hover-rounded":
      return css`
        background-color: ${bgColor || primary};
        border-radius: 5px;
        &:hover {
          border-radius: 49vh;
        }
      `;
    case "text-hover-contained":
      return css`
        background-color: transparent;
        &:hover {
          background-color: ${bgColor || primary};
        }
      `;
    case "text-hover-rounded":
      return css`
        background-color: transparent;
        border-radius: 5px;
        &:hover {
          border-radius: 49vh;
          background-color: ${bgColor || primary};
        }
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 14px;
  cursor: pointer;
  font-weight: normal;
  border-radius: ${(props) =>
    props.variant?.includes("rounded") ? "49vh" : "5px"};
  display: inline-block;
  border-style: solid;
  border-width: 0px;
  cursor: ${(props) => props.disabled && "not-allowed"};
  ${(props) =>
    props.border &&
    css`
      border-width: ${calculateBorderWidth(props.border)}px;
    `}
  ${(props) =>
    props.size &&
    css`
      padding: ${calculatePadding(props.size)};
    `}
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: ${calculateShadow(props.shadow)};
      -webkit-box-shadow: ${calculateShadow(props.shadow)}; /* Safari/Chrome */
      -moz-box-shadow: ${calculateShadow(props.shadow)}; /* Firefox */
    `}
  ${(props) =>
    props.variant &&
    getStyleByVariant({ variant: props.variant, bgColor: props.bgColor })}
`;

const Button = ({
  text,
  children,
  disabled = false,
  size = "md",
  border,
  shadow,
  bgColor,
  variant = "contained",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      size={size}
      disabled={disabled}
      border={border}
      shadow={shadow}
      bgColor={bgColor}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {text || children}
    </StyledButton>
  );
};

export default Button;
