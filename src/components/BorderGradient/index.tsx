import React from "react";
import cn from "classnames";

interface BorderGradientProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "custom";
  customFromColor?: string; // Màu bắt đầu cho variant custom
  customToColor?: string; // Màu kết thúc cho variant custom
  innerBgColor?: string; // Màu background bên trong border
  gradientDirection?: string; // Hướng gradient (ví dụ: "to bottom", "45deg")
  borderRadius?: string; // Độ bo góc (ví dụ: "1rem", "4px")
  padding?: string; // Độ dày border (ví dụ: "2px", "0.5rem")
  className?: string; // Class bổ sung nếu cần
}

export const BorderGradient: React.FC<BorderGradientProps> = ({
  children,
  variant,
  customFromColor,
  customToColor,
  innerBgColor = "#001218",
  gradientDirection = "90deg", // Mặc định là ngang (to right)
  borderRadius = "0.5rem", // Mặc định là 8px
  padding = "2px", // Mặc định là 2px
  className,
}) => {
  // Định nghĩa màu set sẵn cho primary và secondary
  const gradientStyles = {
    primary: {
      from: "rgba(0, 255, 213, 0.3) 0%", // blue-500
      to: "rgba(0, 47, 53, 0.3) 100%", // indigo-600
    },
    secondary: {
      from: "#8B5CF6", // purple-500
      to: "#EC4899", // pink-600
    },
    custom: {
      from: customFromColor || "#6B7280", // gray-500 (fallback)
      to: customToColor || "#4B5563", // gray-600 (fallback)
    },
  };

  // Chọn màu gradient dựa trên variant
  const { from, to } =
    variant === "custom" ? gradientStyles.custom : gradientStyles[variant];

  // Style cho gradient border
  const borderStyle = {
    background: `linear-gradient(${gradientDirection}, ${from}, ${to})`,
    padding, // Dùng giá trị từ prop
    borderRadius, // Dùng giá trị từ prop
  };

  // Style cho nội dung bên trong
  const innerStyle = {
    backgroundColor: innerBgColor,
    borderRadius: `calc(${borderRadius} - ${padding})`, // Điều chỉnh để khớp với padding
    height: "100%",
    width: "100%",
  };

  return (
    <div className={cn(className)} style={borderStyle}>
      <div style={innerStyle}>{children}</div>
    </div>
  );
};
