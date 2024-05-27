import "@padra/styles/globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import ParentHeader from "@padra/components/parent-layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Epilogue } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';

const epilouge = Epilogue({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Redirect to login page if not authenticated
  useEffect(() => {
    // Your authentication logic here
    const isAuthenticated = false; // For demonstration, assume user is not authenticated

    if (!isAuthenticated) {
      // router.push("/login");
    }
  }, []);

  return (
    <main className={epilouge.className}>
      <PrimeReactProvider>
        <ParentHeader>
          <Component {...pageProps}/>
        </ParentHeader>
      </PrimeReactProvider>
    </main>
  );
}
