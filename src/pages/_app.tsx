import LayoutContainer from "@/components/Layout";
import AddressContext from "@/context/AddressContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AddressContext>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </AddressContext>
  );
}
