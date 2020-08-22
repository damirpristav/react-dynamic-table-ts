import React, { FC } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return(
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;