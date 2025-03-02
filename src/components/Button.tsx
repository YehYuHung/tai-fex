import classNames from "classnames";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customColor?: string;
  primary: boolean;
  secondary: boolean;
  success: boolean;
  warning: boolean;
  danger: boolean;
  outline: boolean;
  rounded: boolean;
}

export default function Button({
  children,
  customColor,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const classes = classNames(
    className,
    "flex justify-center px-3 py-1.5 border font-semibold",
    {
      "border-blue-500 bg-blue-500 text-white": primary && !outline,
      "border-blue-900 bg-blue-900 text-white": secondary && !outline,
      "border-green-500 bg-green-500 text-white": success && !outline,
      "border-yellow-400 bg-yellow-400 text-white": warning && !outline,
      "border-red-500 bg-red-500 text-white": danger && !outline,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-blue-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
      "transition duration-100 scale-105": isHovered,
    }
  );

  return (
    <button
      {...rest}
      style={{
        backgroundColor: !outline ? customColor || undefined : "white",
        borderColor: customColor || undefined,
        color: outline && customColor ? customColor : undefined,
      }}
      className={classes}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {children}
    </button>
  );
}
