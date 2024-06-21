import React from 'react';

interface CircularProgressBarProps {
  size: number;
  progress: number; // progress in percentage (0 to 100)
  strokeWidth: number;
  color: string;
  children?: React.ReactNode;
}

const CircularProgressBar: React.FC<
  CircularProgressBarProps
> = ({
  size,
  progress,
  strokeWidth,
  color,
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference -
    (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
      >
        <circle
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${
            size / 2
          })`}
          className="transition-stroke-dashoffset duration-500"
        />
      </svg>
      <div className="flex items-center justify-center absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default CircularProgressBar;
