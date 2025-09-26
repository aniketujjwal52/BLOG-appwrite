import React from "react";

function Button({ 
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props // aur kuch bhi ho to wo bhi yahan aa jayega
}) {
  return (
    <button className= {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  );
}

export default Button;


