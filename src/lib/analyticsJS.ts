import { SegmentAnalytics } from "@segment/analytics.js-core";

declare global {
  interface Window {
    analytics?: SegmentAnalytics.AnalyticsJS & {
      load: (key: string, options?: object) => void;
      _writeKey: string;
    };
  }
}

export const ENABLE_ANALYTICS =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

let loaded = false;

const analyticsJS = (): SegmentAnalytics.AnalyticsJS | void => {
  if (!loaded && ENABLE_ANALYTICS) {
    global.window.analytics?.load(global.window.analytics._writeKey, {
      integrations: { Intercom: false },
    });

    loaded = true;
  }

  return global.window.analytics;
};

export default analyticsJS;
