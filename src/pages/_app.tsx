import LayoutContainer from "@/components/Layout";
import AddressContext from "@/context/AddressContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AddressContext>
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </AddressContext>
    </QueryClientProvider>
  );
}
