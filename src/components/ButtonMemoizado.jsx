import React from 'react';

const ButtonMemoizado = ({
    children = "Confirmar",
    onClick,
    className = "",
    type = "button",
    disabled = false
}) => {

    const baseClasses = "bg-sky-800 text-white border-none p-2 rounded-lg";
    console.log("rederixei button")
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
        >
            {children}
        </button>
    );
};

export default React.memo(ButtonMemoizado);