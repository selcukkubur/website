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
    name: "Postmark",
    id: "postmark",
    slug: "postmark",
    category: "email",
    competitors: emailProviders,
    website_url: "https://postmarkapp.com/",
    courier_url: "https://docs.courier.com/docs/postmark",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/postmarkapp.png",
      app_screenshot:
        "https://public-assets.postmarkapp.com/manual/activity_feed.png",
    },
    alexa_rank: 19049,
    employee_count: 20,
    description: `Postmark is an email app that enables developers to create transactional emails. It is a full-service email API that helps companies reach their audience. Postmark helps its customers to send transactional emails by providing an API that is easy to use on top of its web interface. With the Postmark API you can create your own system that can send transactions automatically or on demand.`,
    headquarter_city: "Philadelphia",
    headquarter_country: "USA",
    total_funding: 0,
    founded_in: 2010,
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
    name: "Mailgun",
    id: "mailgun",
    slug: "mailgun",
    category: "email",
    competitors: emailProviders,
    website_url: "https://www.mailgun.com/",
    courier_url: "https://docs.courier.com/docs/mailgun",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailgun.png",
      app_screenshot:
        "https://documentation.mailgun.com/en/latest/_images/validation_control_panel.png",
    },
    alexa_rank: 3998,
    employee_count: 250,
    description: `Mailgun is a cloud-based email service that offers developers and businesses of all sizes a complete toolkit for sending, receiving, tracking and analyzing their email campaigns. Mailgun offers a wide range of features, including an SMTP server, DKIM signing, RESTful API, and plugins. It also allows you to use third party services like Mandrill, Salesforce, or Mailchimp without the hassle of setting up APIs and managing your own servers.`,
    headquarter_city: "San Antonio",
    headquarter_country: "USA",
    total_funding: 51100000,
    founded_in: 2010,
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
    name: "Sendgrid",
    id: "sendgrid",
    slug: "sendgrid",
    category: "email",
    competitors: emailProviders,
    website_url: "https://sendgrid.com/",
    courier_url: "https://docs.courier.com/docs/sendgrid",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sendgrid.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 3293,
    employee_count: 1000,
    description: `Founded in 2009, SendGrid is a cloud-based email service provider for delivering transactional and marketing email. SendGrid helps businesses communicate with their customers by providing a scalable, reliable, and secure SMTP platform. It provides comprehensive APIs that are easily integrated into any application or website. SendGrid handles billions of emails per month for over 200,000 customers worldwide.`,
    headquarter_city: "Denver",
    headquarter_country: "USA",
    total_funding: 219400000,
    founded_in: 2009,
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
    name: "Amazon SES",
    id: "amazonSes",
    slug: "amazon-ses",
    category: "email",
    competitors: emailProviders,
    website_url: "https://aws.amazon.com/ses/",
    courier_url: "https://docs.courier.com/docs/aws-ses",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/aws-ses.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 11,
    employee_count: 45000,
    description: `Amazon SES is a highly scalable email service that lets you send and receive email from your applications. You can use it to send transactional, marketing, and promotional messages. Their API simplifies the process of emailing by eliminating the need for organizations to maintain their own email servers or use third-party SMTP services.`,
    headquarter_city: "Seattle",
    headquarter_country: "USA",
    total_funding: 108000000,
    founded_in: 2006,
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
    name: "Sparkpost",
    id: "sparkpost",
    slug: "sparkpost",
    category: "email",
    competitors: emailProviders,
    website_url: "https://www.sparkpost.com/",
    courier_url: "https://docs.courier.com/docs/sparkpost",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/sparkpost.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 31516,
    employee_count: 500,
    description: `Sparkpost is a cloud-based email service provider. They offer reliable, scalable email delivery solutions for businesses of all sizes. The company's core product is its cloud-based SMTP service that enables companies to send bulk email with deliverability rates comparable to those of the most popular consumer mail clients. Sparkpost also offers an API platform, which enables developers to build custom applications for sending and tracking emails via the Sparkpost service.`,
    headquarter_city: "Columbia",
    headquarter_country: "USA",
    total_funding: 227500000,
    founded_in: 1997,
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
    name: "OneSignal Email",
    id: "onesignalEmail",
    slug: "onesignal-email",
    category: "email",
    competitors: emailProviders,
    website_url: "https://onesignal.com/",
    courier_url: "https://docs.courier.com/docs/onesignal-email",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/onesignal.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 3531,
    employee_count: 250,
    description: `OneSignal is the leading mobile push notification service. OneSignal provides tailor-made mobile push notification services for iOS, Android, and web platforms. OneSignal Email is one of OneSignal's newest products, and it's designed to provide a more reliable and efficient means for sending transactional emails. OneSignal Email is ideal for marketing teams who send out lots of automatic email messages.`,
    headquarter_city: "San Mateo",
    headquarter_country: "USA",
    total_funding: 34000000,
    founded_in: 2014,
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
    name: "Mailjet",
    id: "mailjet",
    slug: "mailjet",
    category: "email",
    competitors: emailProviders,
    website_url: "https://www.mailjet.com/",
    courier_url: "https://docs.courier.com/docs/mailjet",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mailjet.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 6740,
    employee_count: 250,
    description: `Mailjet is an email management solution that provides marketers and developers with a platform to design, deliver and track email campaigns. Mailjet was founded in 2010 and quickly became the leading email delivery service for high-volume senders. Mailjet launched its first API in 2013 and today Mailjet has the world's most powerful API, with over 100 integrations.`,
    headquarter_city: "Paris",
    headquarter_country: "France",
    total_funding: 219400000,
    founded_in: 2010,
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
    name: "Mandrill",
    id: "mandrill",
    slug: "mandrill",
    category: "email",
    competitors: emailProviders,
    website_url: "https://mailchimp.com/features/transactional-email/",
    courier_url: "https://docs.courier.com/docs/mandrill",
    images: {
      company_logo:
        "https://courier-website-images.s3.amazonaws.com/mandrill.png",
      app_screenshot:
        "https://imgr.search.brave.com/5mX68V2oh_rt8Mbl4xKrc6m6FC7J7QW8vw1LtEg7tYI/fit/1160/823/ce/1/aHR0cHM6Ly9kMXc4/MmY1eGM3OHdqdS5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL3Rh/cmdldHdhcmUvaW1h/Z2UvZmlsZS85NDg1/L3NlbmRncmlkLm1h/c3Rlci5wbmc",
    },
    alexa_rank: 233,
    employee_count: 5000,
    description: `Mandrill is a transactional email service that is primarily used by SMTP. They provide an API and dedicated IPs to send bulk mailings. The API allows businesses to work outside the Mandrill application, meaning that they can integrate Mandrill into third party programs or software that they use for other aspects of their business.`,
    headquarter_city: "Atlanta",
    headquarter_country: "USA",
    total_funding: 0,
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
];

export default providers;
