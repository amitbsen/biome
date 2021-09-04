import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';

require('antd/dist/antd.less');

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
