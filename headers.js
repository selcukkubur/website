module.exports = [
  {
    source: "/(.*)?", // Matches all pages
    headers: [
      {
        key: "Access-Control-Allow-Origin",
        value: "https://www.courier.com",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "Content-Security-Policy",
        value:
          "base-uri 'self'; \
                connect-src 'self' api.segment.io api-iam.intercom.io forms.hubspot.com www.google-analytics.com heapanalytics.com wss://nexus-websocket-a.intercom.io api.hubapi.com www.google.com stats.g.doubleclick.net api.hsforms.com vitals.vercel-insights.com; \
                default-src 'self'; \
                font-src 'self' data: fonts.gstatic.com js.intercomcdn.com www.slant.co storage.googleapis.com; \
                form-action calendly.com; \
                frame-ancestors 'self'; \
                frame-src www.youtube.com intercom-sheets.com bid.g.doubleclick.net; \
                img-src 'self' data: www.google-analytics.com courier-website-images.s3.amazonaws.com heapanalytics.com images.ctfassets.net track.hubspot.com js.intercomcdn.com static.intercomassets.com i.ytimg.com px.ads.linkedin.com www.facebook.com www.google.ca www.google.com www.gstatic.com downloads.intercomcdn.com messenger-apps.intercom.io p.adsymptotic.com www.google.co.jp www.google.co.kr www.google.co.uk www.google.de www.google.gr www.google.ro www.google.ru www.linkedin.com forms.hsforms.com www.google.co.in www.google.co.ma www.google.co.nz www.google.co.za www.google.co.zw www.google.com.au www.google.com.br www.google.com.gh www.google.com.my www.google.com.ng www.google.com.pe www.google.com.ph www.google.com.pr www.google.com.sg www.google.com.tr www.google.com.ua www.google.com.vn www.google.cz www.google.dk www.google.es www.google.fr www.google.lk www.google.pt www.googletagmanager.com log-papago.naver.com translate.google.com www.google.am www.google.at www.google.be www.google.ch www.google.cl www.google.co.il www.google.co.ke www.google.com.ar www.google.com.bd www.google.com.co www.google.com.kw www.google.com.mt www.google.com.mx www.google.com.np www.google.com.pk www.google.com.tw www.google.com.uy www.google.fi www.google.ie www.google.is www.google.it www.google.jo www.google.nl www.google.no www.google.pl www.google.rs www.google.se www.google.ae www.google.co.ao www.google.mu www.google.hu t.co; \
                manifest-src 'self'; \
                media-src 'self' js.intercomcdn.com; \
                object-src 'none'; \
                script-src 'self' 'unsafe-inline' widget.intercom.io www.google-analytics.com www.googletagmanager.com cdn.heapanalytics.com cdn.segment.com js-na1.hs-scripts.com js.hs-analytics.net js.hs-banner.com js.hscollectedforms.net js.intercomcdn.com js.hsadspixel.net snap.licdn.com www.google.com analytics.twitter.com static.ads-twitter.com www.googleadservices.com googleads.g.doubleclick.net stats.g.doubleclick.net js.hsleadflows.net vitals.vercel-insights.com connect.facebook.net; \
                script-src-elem 'self' 'unsafe-inline' widget.intercom.io www.google-analytics.com www.googletagmanager.com cdn.heapanalytics.com cdn.segment.com js-na1.hs-scripts.com js.hs-analytics.net js.hs-banner.com js.hscollectedforms.net js.intercomcdn.com js.hsadspixel.net snap.licdn.com www.google.com analytics.twitter.com static.ads-twitter.com www.googleadservices.com googleads.g.doubleclick.net stats.g.doubleclick.net js.hsleadflows.net vitals.vercel-insights.com connect.facebook.net; \
                style-src 'self' 'unsafe-inline' fonts.googleapis.com; \
                style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com; \
                worker-src 'self';",
      },
    ],
  },
];
