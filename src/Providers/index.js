import React from "react";
import { APIProvider } from "./APIProvider";

export const Providers = ({ children }) => {
  return <APIProvider>{children}</APIProvider>;
};
