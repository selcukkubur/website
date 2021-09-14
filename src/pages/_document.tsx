import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-expect-error
import * as snippet from "@segment/snippet";
const APP_NAME = "Courier";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  renderAnalyticsSnippet() {
    const opts = {
      apiKey: process.env.SEGMENT_KEY,
      page: false,
      load: false,
    };

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  renderIntercomSnippet() {
    return `
      var APP_ID = "${process.env.INTERCOM_KEY}";
      var INTERCOM_DELAY = 5000;
      window.intercomSettings = {
        app_id: APP_ID,
      };
      (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){setTimeout(function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}, INTERCOM_DELAY)};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{ __html: this.renderAnalyticsSnippet() }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: this.renderIntercomSnippet() }}
          />
          <link
            rel="preload"
            href="/fonts/Gellix/Gellix-ExtraBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Gellix/Gellix-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Gellix/Gellix-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
