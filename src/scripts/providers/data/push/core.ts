import getEmailFeatures from "../../functions/getEmailFeatures";
import getEmailPricing from "../../functions/getEmailPricing";
import { emailProviders } from "../../types/email";
import { Providers } from "../../types/providers";
import additionalInfo from "../email/additionalInfo";

const {
  postmark,
  mailgun,
  sendgrid,
  amazonSes,
  sparkpost,
  onesignalEmail,
  mailjet,
  mandrill,
} = additionalInfo;

const providers: Providers = [
  {
    name: "Airship",
    id: "airship",
    slug: "airship",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.airship.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/push/airship/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/postmarkapp.png",
      app_screenshot:
        "https://public-assets.postmarkapp.com/manual/activity_feed.png",
    },
    alexa_rank: 36448,
    employee_count: 300,
    description: `Postmark is an email app that enables developers to create transactional emails. It is a full-service email API that helps companies reach their audience. Postmark helps its customers to send transactional emails by providing an API that is easy to use on top of its web interface. With the Postmark API you can create your own system that can send transactions automatically or on demand.`,
    headquarter_city: "Portland",
    headquarter_country: "USA",
    total_funding: 101700000,
    founded_in: 2009,
    pros: postmark.pros,
    cons: postmark.cons,
    when_to_use: postmark.when_to_use,
    ratings: {
      trustpilot: 3.8,
      g2: 4.6,
    },
    features: getEmailFeatures({ provider: "postmark" }),
    pricing: getEmailPricing({ provider: "postmark" }),
  },
  {
    name: "Apple Push Notification",
    id: "apple-push-notification",
    slug: "apple-push-notification",
    category: "push",
    competitors: emailProviders,
    website_url: "https://developer.apple.com/notifications/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/apple-push-notification/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailgun.png",
      app_screenshot:
        "https://documentation.mailgun.com/en/latest/_images/validation_control_panel.png",
    },
    alexa_rank: 55,
    employee_count: 132000,
    description: `Mailgun is a cloud-based email service that offers developers and businesses of all sizes a complete toolkit for sending, receiving, tracking and analyzing their email campaigns. Mailgun offers a wide range of features, including an SMTP server, DKIM signing, RESTful API, and plugins. It also allows you to use third party services like Mandrill, Salesforce, or Mailchimp without the hassle of setting up APIs and managing your own servers.`,
    headquarter_city: "Cupertino",
    headquarter_country: "USA",
    total_funding: 1000000000,
    founded_in: 1976,
    pros: mailgun.pros,
    cons: mailgun.cons,
    when_to_use: mailgun.when_to_use,
    ratings: {
      trustpilot: 4.3,
      g2: 4.5,
    },
    features: getEmailFeatures({ provider: "mailgun" }),
    pricing: getEmailPricing({ provider: "mailgun" }),
  },
  {
    name: "Amazon SNS Push",
    id: "amazon-sns-push",
    slug: "amazon-sns-push",
    category: "push",
    competitors: emailProviders,
    website_url: "https://aws.amazon.com/sns/",
    courier_url: "https://www.courier.com/docs/guides/providers/push/aws-sns/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sendgrid.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 11,
    employee_count: 45000,
    description: `Founded in 2009, SendGrid is a cloud-based email service provider for delivering transactional and marketing email. SendGrid helps businesses communicate with their customers by providing a scalable, reliable, and secure SMTP platform. It provides comprehensive APIs that are easily integrated into any application or website. SendGrid handles billions of emails per month for over 200,000 customers worldwide.`,
    headquarter_city: "Seattle",
    headquarter_country: "USA",
    total_funding: 108000000,
    founded_in: 2006,
    pros: sendgrid.pros,
    cons: sendgrid.cons,
    when_to_use: sendgrid.when_to_use,
    ratings: {
      trustpilot: 1.3,
      g2: 4.0,
    },
    features: getEmailFeatures({ provider: "sendgrid" }),
    pricing: getEmailPricing({ provider: "sendgrid" }),
  },
  {
    name: "Beamer",
    id: "beamer",
    slug: "beamer",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.getbeamer.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/push/beamer/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/aws-ses.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 21536,
    employee_count: 16,
    description: `Amazon SES is a highly scalable email service that lets you send and receive email from your applications. You can use it to send transactional, marketing, and promotional messages. Their API simplifies the process of emailing by eliminating the need for organizations to maintain their own email servers or use third-party SMTP services.`,
    headquarter_city: "Boulder",
    headquarter_country: "USA",
    total_funding: 0,
    founded_in: 2017,
    pros: amazonSes.pros,
    cons: amazonSes.cons,
    when_to_use: amazonSes.when_to_use,
    ratings: {
      trustpilot: 2.3,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "amazonSes" }),
    pricing: getEmailPricing({ provider: "amazonSes" }),
  },
  {
    name: "Drift",
    id: "drift",
    slug: "drift",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.drift.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/push/drift/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sparkpost.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 7417,
    employee_count: 750,
    description: `Sparkpost is a cloud-based email service provider. They offer reliable, scalable email delivery solutions for businesses of all sizes. The company's core product is its cloud-based SMTP service that enables companies to send bulk email with deliverability rates comparable to those of the most popular consumer mail clients. Sparkpost also offers an API platform, which enables developers to build custom applications for sending and tracking emails via the Sparkpost service.`,
    headquarter_city: "Boston",
    headquarter_country: "USA",
    total_funding: 107000000,
    founded_in: 2015,
    pros: sparkpost.pros,
    cons: sparkpost.cons,
    when_to_use: sparkpost.when_to_use,
    ratings: {
      trustpilot: 4.6,
      g2: 4.0,
    },
    features: getEmailFeatures({ provider: "sparkpost" }),
    pricing: getEmailPricing({ provider: "sparkpost" }),
  },
  {
    name: "Expo",
    id: "expo",
    slug: "expo",
    category: "push",
    competitors: emailProviders,
    website_url: "https://docs.expo.dev/push-notifications/overview/",
    courier_url: "https://www.courier.com/docs/guides/providers/push/expo/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/onesignal.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 5308,
    employee_count: 25,
    description: `OneSignal is the leading mobile push notification service. OneSignal provides tailor-made mobile push notification services for iOS, Android, and web platforms. OneSignal Email is one of OneSignal's newest products, and it's designed to provide a more reliable and efficient means for sending transactional emails. OneSignal Email is ideal for marketing teams who send out lots of automatic email messages.`,
    headquarter_city: "Palo Alto",
    headquarter_country: "USA",
    total_funding: 120000,
    founded_in: 2013,
    pros: onesignalEmail.pros,
    cons: onesignalEmail.cons,
    when_to_use: onesignalEmail.when_to_use,
    ratings: {
      trustpilot: 2.6,
      g2: 4.7,
    },
    features: getEmailFeatures({ provider: "onesignalEmail" }),
    pricing: getEmailPricing({ provider: "onesignalEmail" }),
  },
  {
    name: "Firebase FCM",
    id: "firebase-fcm",
    slug: "firebase-fcm",
    category: "push",
    competitors: emailProviders,
    website_url: "https://firebase.google.com/docs/cloud-messaging",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/firebase-fcm/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailjet.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 1,
    employee_count: 250,
    description: `Mailjet is an email management solution that provides marketers and developers with a platform to design, deliver and track email campaigns. Mailjet was founded in 2010 and quickly became the leading email delivery service for high-volume senders. Mailjet launched its first API in 2013 and today Mailjet has the world's most powerful API, with over 100 integrations.`,
    headquarter_city: "San Francisco",
    headquarter_country: "USA",
    total_funding: 7000000,
    founded_in: 2011,
    pros: mailjet.pros,
    cons: mailjet.cons,
    when_to_use: mailjet.when_to_use,
    ratings: {
      trustpilot: 3.1,
      g2: 3.9,
    },
    features: getEmailFeatures({ provider: "mailjet" }),
    pricing: getEmailPricing({ provider: "mailjet" }),
  },
  {
    name: "MagicBell",
    id: "magicbell",
    slug: "magicbell",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.magicbell.com/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/magicbell/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 336648,
    employee_count: 7,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "Los Angeles",
    headquarter_country: "USA",
    total_funding: 1900000,
    founded_in: 2020,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "OneSignal Push",
    id: "onesignal-push",
    slug: "onesignal-push",
    category: "push",
    competitors: emailProviders,
    website_url: "https://onesignal.com/mobile-push",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/onesignal-push/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 2794,
    employee_count: 250,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "San Mateo",
    headquarter_country: "USA",
    total_funding: 34000000,
    founded_in: 2014,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "Opsgenie",
    id: "opsgenie",
    slug: "opsgenie",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.atlassian.com/software/opsgenie",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/ops-genie/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 829,
    employee_count: 200,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "Boston",
    headquarter_country: "USA",
    total_funding: 10000000,
    founded_in: 2012,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "PageDuty",
    id: "pagerduty",
    slug: "pagerduty",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.pagerduty.com/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/pagerduty/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 15721,
    employee_count: 783,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "San Francisco",
    headquarter_country: "USA",
    total_funding: 663500000,
    founded_in: 2009,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "Pushbullet",
    id: "pushbullet",
    slug: "pushbullet",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.pushbullet.com/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/pushbullet/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 5174,
    employee_count: 350,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "San Francisco",
    headquarter_country: "USA",
    total_funding: 1500000,
    founded_in: 2013,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "Splunk On-Call",
    id: "splunk-on-call",
    slug: "splunk-on-call",
    category: "push",
    competitors: emailProviders,
    website_url: "https://www.splunk.com/en_us/observability/on-call.html",
    courier_url:
      "https://www.courier.com/docs/guides/providers/push/splunk-on-call/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 12835,
    employee_count: 4400,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "San Francisco",
    headquarter_country: "USA",
    total_funding: 3800000000,
    founded_in: 2003,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.6,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
];

export default providers;
