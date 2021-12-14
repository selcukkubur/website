const emailAdditionalInfo = {
  sparkpost: {
    pros: [
      "The platform is reliable, fast, secure, and privacy-focused.",
      "It is easy to use and set up.",
      "It performs predictive and real-time analytics to prevent email delivery problems.",
    ],
    cons: [
      "It is designed for developers only.",
      "It does not support integrations with other systems.",
    ],
    when_to_use: [
      "It is excellent for enterprise SaaS, fintech, financial services, and martech companies.",
      "It is suitable for transactional email and multi-channel purposes.",
      "It is great for companies that need self-hosting options.",
    ],
  },
  postmark: {
    pros: [
      "It is easy to set up, deliver, and parse transactional emails at scale.",
      "It comes with ready-to-use responsive email templates.",
      "It provides troubleshooting and analytics tools.",
    ],
    cons: [
      "It has a 45-day access limit to email history.",
      "It does not offer yearly pricing—only monthly.",
      "There is no support for lists and visual template builders.",
    ],
    when_to_use: [
      "Postmark is great for agencies, enterprises, startups, and even your side projects.",
      "It is an excellent choice if you want to use servers to separate your email stream.",
      "It is also a great choice if you want a complete self-serve option.",
    ],
  },
  mailgun: {
    pros: [
      "Mailgun is easy to set up.",
      "It has extensive and well-documented APIs.",
      "It has high throughput and offers quick email integration.",
      "It has support for email marketing.",
    ],
    cons: [
      "Mailgun has spotty historical reliability.",
      "Support has been poor since its acquisition.",
    ],
    when_to_use: [
      "Mailgun is great for freelancers plus small-, medium-, and large-scale companies.",
      "It is an excellent choice if you have developers handling emails since Mailgun is developer-focused.",
      "It is your best bet if you’re working with the larger Pathwire/Sinch ecosystem.",
      "Also, it’s a great choice when you need enterprise consulting services.",
    ],
  },
  sendgrid: {
    pros: [
      "It provides detailed and valuable statistics on sent emails.",
      "There's a lifelong free plan.",
      "It's secure and safe.",
    ],
    cons: [
      "The documentation doesn't answer some questions and misses information.",
      "It is challenging to use for people with zero technical background or coding knowledge.",
      "The support system is slow and sometimes unresponsive.",
      "Emails almost always end up in spam folders for Microsoft email users.",
    ],
    when_to_use: [
      "It's great for brands and firms that want to get emails across in ample time.",
      "It is an affordable option if you send out newsletters but do not intend to profit from them.",
      "It is a great option if you're building software and need a reliable email service.",
    ],
  },
  amazonSes: {
    pros: [
      "It is reasonably affordable.",
      "It is extremely reliable and very customizable.",
      "It uses a pay-per-use system.",
    ],
    cons: [
      "There’s a limit to the daily email count you can send.",
      "It is inaccessible to unregistered users.",
      "It could be complicated to use for non-tech-savvy users.",
    ],
    when_to_use: [
      "It is suitable for developers on the AWS ecosystem who want to integrate a mailing system into their software.",
      "It is suitable for firms or brands to send bulk transactional emails.",
      "It is an excellent tool for email marketing.",
    ],
  },
  mailjet: {
    pros: [
      "There's a free version with up to 200 daily emails.",
      "You can have unlimited subscribers.",
      "It allows you to personalize your emails.",
      "It charges per number of emails and not per number of subscribers.",
    ],
    cons: [
      "There are not enough templates.",
      "It doesn't have a landing page builder.",
      "List management can be stressful.",
    ],
    when_to_use: [
      "Mailjet is a good option for startup email marketers.",
      "It's great for teams: different team members can build and design templates smoothly and in real-time.",
      "If you want to integrate an email service into your software, it's a good choice.",
    ],
  },
  mandrill: {
    pros: [
      "Mandrill uses custom frameworks to ensure high deliverability and security.",
      "There is smooth onboarding and a quick setup.",
      "It is compatible with and easy to integrate with various web frameworks.",
    ],
    cons: [
      "You have to use Mailchimp to have access to Mandrill, so you have to pay for two tools.",
      "You lose data on your delivered emails after 30 days.",
      "It has a confusing user interface.",
    ],
    when_to_use: [
      "If you are a community, organization, or person who sends emails to multiple people and needs a quick fix.",
      "It isn't for affiliate marketers.",
      "Mandrill is a good option if you want easily accessible and detailed reports on your emails.",
    ],
  },
  onesignalEmail: {
    pros: [
      "You can import an already-existing list of subscribers.",
      "You can easily control in-app messaging and email subscribers from one account.",
      "You have access to extensive third-party support.",
    ],
    cons: [
      "It is relatively slow to send emails compared to other email notification providers.",
      "It returns frequent errors.",
    ],
    when_to_use: [
      "If you’re looking to send push notifications to people who use your website, OneSignalEmail is a great option for you.",
      "It is an excellent choice if you or your brand have an audience spread across various platforms and manage them efficiently.",
    ],
  },
};

export default emailAdditionalInfo;
