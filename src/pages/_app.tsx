import LayoutContainer from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import AddressContext from "@/context/AddressContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AddressContext>
        <LayoutContainer>
          <Component {...pageProps} />
          <ToastContainer
            pauseOnHover={false}
            position={"bottom-right"}
            hideProgressBar={false}
            closeOnClick={true}
            draggable={true}
            theme={"colored"}
          />
        </LayoutContainer>
      </AddressContext>
    </QueryClientProvider>
  );
}
