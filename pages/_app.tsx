import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { MDXEmbedProvider } from 'mdx-embed';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <MDXEmbedProvider>
          <Component {...pageProps} />
        </MDXEmbedProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
