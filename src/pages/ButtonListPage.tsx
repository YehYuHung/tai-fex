import Button from "../components/Button";
import { useState } from "react";

const defaultColors = {
  primary: "#3B82F6", // blue
  secondary: "#E8118B", // gray
  success: "#10B981", // green
  warning: "#F59E0B", // yellow
  danger: "#EF4444", // red
};

const buttonList = [
  ["primary"],
  ["secondary"],
  ["success"],
  ["warning"],
  ["danger"],
  ["primary", "rounded"],
  ["secondary", "rounded"],
  ["success", "rounded"],
  ["warning", "rounded"],
  ["danger", "rounded"],
  ["primary", "outline"],
  ["secondary", "outline"],
  ["success", "outline"],
  ["warning", "outline"],
  ["danger", "outline"],
  ["primary", "outline", "rounded"],
  ["secondary", "outline", "rounded"],
  ["success", "outline", "rounded"],
  ["warning", "outline", "rounded"],
  ["danger", "outline", "rounded"],
];

export default function ButtonListPage() {
  const [colors, setColors] = useState(defaultColors);

  // Update the color for a specific button type
  const handleColorChange = (type: string, color: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };

  const renderButtonView = buttonList.map((val, index) => {
    const buttonProps = {
      primary: val.includes("primary"),
      secondary: val.includes("secondary"),
      success: val.includes("success"),
      warning: val.includes("warning"),
      danger: val.includes("danger"),
      outline: val.includes("outline"),
      rounded: val.includes("rounded"),
      customColor:
        colors[
          val.find((v) =>
            ["primary", "secondary", "success", "warning", "danger"].includes(v)
          ) as keyof typeof colors
        ],
    };
    return (
      <Button key={index} {...buttonProps}>
        {val.join(" ")}
      </Button>
    );
  });

  const renderSelectColor = Object.keys(defaultColors).map((colorType) => {
    return (
      <div key={colorType} className="flex items-center space-x-2 mb-2">
        <label htmlFor={colorType}>{colorType} Color:</label>
        <input
          type="color"
          id={colorType}
          value={colors[colorType as keyof typeof colors]}
          onChange={(e) => handleColorChange(colorType, e.target.value)}
          className="w-10 h-10"
        />
      </div>
    );
  });

  return (
    <div>
      {/* Color pickers */}
      <div className="grid grid-cols-5 gap-4 mb-3">{renderSelectColor}</div>
      <div className="grid grid-cols-5 gap-4">{renderButtonView}</div>
    </div>
  );
}
