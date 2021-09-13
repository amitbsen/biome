import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import JazzLayout from '../components/shared/JazzLayout';
import Head from 'next/head';
require('antd/dist/antd.less');

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css"
        ></link>
      </Head>
      <JazzLayout>
        <Component {...pageProps} />
      </JazzLayout>
    </>
  );
}
export default MyApp;
