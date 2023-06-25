import "@/styles/globals.css";
import { SiteContextProvider } from "@/components/SiteContext";

export default function App({ Component, pageProps }) {
    return (
        <SiteContextProvider>
            <Component {...pageProps} />
        </SiteContextProvider>
    );
}
