import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'success' | 'light';
  childrenType?: 'text' | 'icon';
};

const Button = ({
  children,
  onClick,
  className,
  variant,
  childrenType,
}: Props) => (
  <button
    type='button'
    className={` text-b&w-1  font-bold ${
      variant === 'success'
        ? 'bg-accent_green hover:bg-accent_green  '
        : variant === 'light'
        ? 'bg-b&w-1 text-primary-3 hover:bg-primary-3 hover:text-b&w-1 border-primary-3 border-2 font-medium'
        : 'bg-primary-1 hover:bg-primary-3'
    }
    ${
      childrenType === 'icon'
        ? 'rounded-full p-2.5 '
        : 'rounded-2xl py-[18px] px-12 '
    }
    ${className}}`}
    onClick={onClick}
  >
   test chromatic changes {children}
  </button>
);

export default Button;
