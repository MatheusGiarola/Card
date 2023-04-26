import { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, Image } from "@chakra-ui/react"; 

export default function App({Component, pageProps }: AppProps) {

    return(
        <ChakraProvider>
            <Head>
                <title>Página inicial</title>
                <link rel="shortcut icon" 
                    href="/brand.png" 
                    type="image/png" 
                />
            </Head>

            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                margin: 0,
                padding: 0,
            }}>
                <Component {...pageProps} />
                
                <Image 
                    src='/background.png'
                    height={'100%'}
                    width={'100%'}
                    objectFit={"cover"}
                    style={{
                        position: 'fixed',
                        zIndex: -1,
                        top: 0,
                        left: 0
                    }}
                />
            </div>
        </ChakraProvider>
    ); 
}