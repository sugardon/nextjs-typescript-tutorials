import { AppProps } from "next/app";
import React from "react";
import "../styles/global.css";

export const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
