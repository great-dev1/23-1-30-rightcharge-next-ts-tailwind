import '../styles/globals.scss';
import '../styles/tailwind.base.scss';
import '../styles/tailwind.components.scss';
import '../styles/tailwind.utility.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
import { SiteProvider } from '@context/siteContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  );
}

export default MyApp;
