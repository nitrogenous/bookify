import React from "react";
import { BooksProvider } from "./BooksProvider";

export const Providers = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};
