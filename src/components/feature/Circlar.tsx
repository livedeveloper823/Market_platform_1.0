import React from 'react';

interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
    percentage,
    size = 120,
    strokeWidth = 10,
}) => {
    // Ensure percentage is between 0 and 100
    const validPercentage = Math.max(0, Math.min(percentage, 100));
    
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (validPercentage / 100) * circumference;

    // Rotate the circle by 90 degrees
    const rotation = 90;

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="circular-progress-bar"
        >
            <circle
                className="circle-bg"
                stroke="#e6e6e6"
                strokeWidth={strokeWidth}
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
            />
            <circle
                className="circle-progress"
                stroke="#3b82f6"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform={`rotate(-${rotation} ${size / 2} ${size / 2})`}
            />
        </svg>
    );
};

export default CircularProgressBar;