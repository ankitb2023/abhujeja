import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTopButton } from './ScrollTopButton';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <ScrollTopButton />
    </>
  );
};
