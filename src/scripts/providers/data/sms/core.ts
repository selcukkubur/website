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
    name: "Africa's Talking",
    id: "africas-talking",
    slug: "africas-talking",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://africastalking.com/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/sms/africas-talking/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/postmarkapp.png",
      app_screenshot:
        "https://public-assets.postmarkapp.com/manual/activity_feed.png",
    },
    alexa_rank: 68144,
    employee_count: 95,
    description: `Postmark is an email app that enables developers to create transactional emails. It is a full-service email API that helps companies reach their audience. Postmark helps its customers to send transactional emails by providing an API that is easy to use on top of its web interface. With the Postmark API you can create your own system that can send transactions automatically or on demand.`,
    headquarter_city: "Nairobi",
    headquarter_country: "Kenya",
    total_funding: 8600000,
    founded_in: 2010,
    pros: postmark.pros,
    cons: postmark.cons,
    when_to_use: postmark.when_to_use,
    ratings: {
      trustpilot: 3.8,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "postmark" }),
    pricing: getEmailPricing({ provider: "postmark" }),
  },
  {
    name: "Amazon SNS",
    id: "amazon-sns-sms",
    slug: "amazon-sns-sms",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://aws.amazon.com/sns/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/aws-sns/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailgun.png",
      app_screenshot:
        "https://documentation.mailgun.com/en/latest/_images/validation_control_panel.png",
    },
    alexa_rank: 11,
    employee_count: 45000,
    description: `Mailgun is a cloud-based email service that offers developers and businesses of all sizes a complete toolkit for sending, receiving, tracking and analyzing their email campaigns. Mailgun offers a wide range of features, including an SMTP server, DKIM signing, RESTful API, and plugins. It also allows you to use third party services like Mandrill, Salesforce, or Mailchimp without the hassle of setting up APIs and managing your own servers.`,
    headquarter_city: "Seattle",
    headquarter_country: "USA",
    total_funding: 108000000,
    founded_in: 2006,
    pros: mailgun.pros,
    cons: mailgun.cons,
    when_to_use: mailgun.when_to_use,
    ratings: {
      trustpilot: 2.3,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mailgun" }),
    pricing: getEmailPricing({ provider: "mailgun" }),
  },
  {
    name: "MessageBird",
    id: "messagebird",
    slug: "messagebird",
    category: "sms",
    competitors: emailProviders,
    website_url: "c",
    courier_url:
      "https://www.courier.com/docs/guides/providers/sms/messagebird/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sendgrid.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 9995,
    employee_count: 750,
    description: `Founded in 2009, SendGrid is a cloud-based email service provider for delivering transactional and marketing email. SendGrid helps businesses communicate with their customers by providing a scalable, reliable, and secure SMTP platform. It provides comprehensive APIs that are easily integrated into any application or website. SendGrid handles billions of emails per month for over 200,000 customers worldwide.`,
    headquarter_city: "Amsterdam",
    headquarter_country: "Netherlands",
    total_funding: 1100000000,
    founded_in: 2011,
    pros: sendgrid.pros,
    cons: sendgrid.cons,
    when_to_use: sendgrid.when_to_use,
    ratings: {
      trustpilot: 1.3,
      g2: 4.1,
    },
    features: getEmailFeatures({ provider: "sendgrid" }),
    pricing: getEmailPricing({ provider: "sendgrid" }),
  },
  {
    name: "MessageMedia",
    id: "messagemedia",
    slug: "messagemedia",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://messagemedia.com/us/",
    courier_url:
      "https://www.courier.com/docs/guides/providers/sms/messagemedia/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/aws-ses.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 57877,
    employee_count: 200,
    description: `Amazon SES is a highly scalable email service that lets you send and receive email from your applications. You can use it to send transactional, marketing, and promotional messages. Their API simplifies the process of emailing by eliminating the need for organizations to maintain their own email servers or use third-party SMTP services.`,
    headquarter_city: "Melbourne",
    headquarter_country: "Australia",
    total_funding: 42000000,
    founded_in: 2000,
    pros: amazonSes.pros,
    cons: amazonSes.cons,
    when_to_use: amazonSes.when_to_use,
    ratings: {
      trustpilot: 3.5,
      g2: 4.0,
    },
    features: getEmailFeatures({ provider: "amazonSes" }),
    pricing: getEmailPricing({ provider: "amazonSes" }),
  },
  {
    name: "Plivo",
    id: "plivo",
    slug: "plivo",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://www.plivo.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/plivo/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sparkpost.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 33368,
    employee_count: 200,
    description: `Sparkpost is a cloud-based email service provider. They offer reliable, scalable email delivery solutions for businesses of all sizes. The company's core product is its cloud-based SMTP service that enables companies to send bulk email with deliverability rates comparable to those of the most popular consumer mail clients. Sparkpost also offers an API platform, which enables developers to build custom applications for sending and tracking emails via the Sparkpost service.`,
    headquarter_city: "Austin",
    headquarter_country: "USA",
    total_funding: 2100000,
    founded_in: 2011,
    pros: sparkpost.pros,
    cons: sparkpost.cons,
    when_to_use: sparkpost.when_to_use,
    ratings: {
      trustpilot: 3.6,
      g2: 4.5,
    },
    features: getEmailFeatures({ provider: "sparkpost" }),
    pricing: getEmailPricing({ provider: "sparkpost" }),
  },
  {
    name: "Sinch",
    id: "sinch",
    slug: "sinch",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://www.sinch.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/sinch/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/onesignal.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 53376,
    employee_count: 2422,
    description: `OneSignal is the leading mobile push notification service. OneSignal provides tailor-made mobile push notification services for iOS, Android, and web platforms. OneSignal Email is one of OneSignal's newest products, and it's designed to provide a more reliable and efficient means for sending transactional emails. OneSignal Email is ideal for marketing teams who send out lots of automatic email messages.`,
    headquarter_city: "Stockholm",
    headquarter_country: "Sweden",
    total_funding: 2600000000,
    founded_in: 2008,
    pros: onesignalEmail.pros,
    cons: onesignalEmail.cons,
    when_to_use: onesignalEmail.when_to_use,
    ratings: {
      trustpilot: 3.7,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "onesignalEmail" }),
    pricing: getEmailPricing({ provider: "onesignalEmail" }),
  },
  {
    name: "Telnyx",
    id: "telnyx",
    slug: "telnyx",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://telnyx.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/telnyx/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailjet.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 31891,
    employee_count: 200,
    description: `Mailjet is an email management solution that provides marketers and developers with a platform to design, deliver and track email campaigns. Mailjet was founded in 2010 and quickly became the leading email delivery service for high-volume senders. Mailjet launched its first API in 2013 and today Mailjet has the world's most powerful API, with over 100 integrations.`,
    headquarter_city: "Chicago",
    headquarter_country: "USA",
    total_funding: 2100000,
    founded_in: 2009,
    pros: mailjet.pros,
    cons: mailjet.cons,
    when_to_use: mailjet.when_to_use,
    ratings: {
      trustpilot: 3.8,
      g2: 4.8,
    },
    features: getEmailFeatures({ provider: "mailjet" }),
    pricing: getEmailPricing({ provider: "mailjet" }),
  },
  {
    name: "Twilio",
    id: "twilio",
    slug: "twilio",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://www.twilio.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/twilio/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 2005,
    employee_count: 1440,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "San Francisco",
    headquarter_country: "USA",
    total_funding: 2400000000,
    founded_in: 2008,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.4,
      g2: 4.5,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
  {
    name: "Vonage",
    id: "vonage",
    slug: "vonage",
    category: "sms",
    competitors: emailProviders,
    website_url: "https://www.vonage.com/",
    courier_url: "https://www.courier.com/docs/guides/providers/sms/vonage/",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 8904,
    employee_count: 2248,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "Holmdel",
    headquarter_country: "USA",
    total_funding: 1700000000,
    founded_in: 2012,
    pros: mandrill.pros,
    cons: mandrill.cons,
    when_to_use: mandrill.when_to_use,
    ratings: {
      trustpilot: 1.5,
      g2: 4.2,
    },
    features: getEmailFeatures({ provider: "mandrill" }),
    pricing: getEmailPricing({ provider: "mandrill" }),
  },
];

export default providers;
