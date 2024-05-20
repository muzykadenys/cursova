import "@/styles/globals.css";
import "@/Hero/Hero.scss";
import "@/Card/Card.scss";
import "@/Header/Header.scss";
import "@/Form/Form.scss";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
