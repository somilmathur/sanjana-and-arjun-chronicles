import React from 'react';

type IconButtonProps = {
    icon: any;
    className?: string;
    onClick?: any;
    circle?: boolean;
    size?: string;
    disabled?: boolean;
    id?: string;
}

const IconButton = ({
  icon, className, circle, onClick, size, disabled, id,
} : IconButtonProps) => (
  <div
    className={`${className} ${circle ? 'rounded-1/2' : ''} ${size === 'xs' && 'p-1.25'} ${size === 'sm' && 'p-2.5'} ${size === 'md' && 'p-3.5'} ${disabled ? 'pointer-events-none opacity-40' : ''} cursor-pointer`}
    onClick={onClick}
    role="presentation"
    id={`${id || ''}`}
  >
    {icon}
  </div>
);

export default IconButton;
