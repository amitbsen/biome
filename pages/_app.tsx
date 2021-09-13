import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import JazzLayout from '../components/shared/JazzLayout';

require('antd/dist/antd.less');

function MyApp({Component, pageProps}: AppProps) {
  return (
    <JazzLayout>
      <Component {...pageProps} />
    </JazzLayout>
  );
}
export default MyApp;
