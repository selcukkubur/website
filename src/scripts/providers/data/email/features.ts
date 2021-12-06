import type { IEmailFeatures } from "../../types/email";

const emailFeatures: IEmailFeatures = {
  "SDKs Available": {
    postmark: "javascript, php, ruby, .net, java,",
    mailgun: "javascript, php, ruby, go",
    sendgrid: "javascript, php, java, go, python, ruby",
    amazonSes: "javascript, php, java, go, python, ruby, php, c++",
    mailjet: "javascript, php, java, go, python, ruby, C#",
    mandrill: "javascript, php, python, ruby",
    onesignalEmail: "javascript, php, java, swift, objective-c, c#",
    sparkpost: "javascript, php, python, java, go, c#",
  },
  "Has Courier.com Integration": {
    postmark: true,
    mailgun: true,
    sendgrid: true,
    amazonSes: true,
    mailjet: true,
    mandrill: true,
    onesignalEmail: true,
    sparkpost: true,
  },
  "Drag & Drop Editor": {
    postmark: false,
    mailgun: false,
    sendgrid: true,
    amazonSes: false,
    mailjet: true,
    mandrill: false,
    onesignalEmail: true,
    sparkpost: false,
  },
  "Custom HTML Editor": {
    postmark: true,
    mailgun: false,
    sendgrid: true,
    amazonSes: false,
    mailjet: true,
    mandrill: false,
    onesignalEmail: true,
    sparkpost: true,
  },
  "Threshold for free plan and dedicated IP": {
    postmark:
      "Postmark has various plans with different maximum email limits ranging from 10,000 to 5 million. However, customers sending up to 300,000 emails monthly can use a dedicated IP address with an additional cost of $50 per month.",
    mailgun:
      "The threshold for Mailgun is 5,000 messages/month and 300 messages/day for the free plan and no daily limit for the flex plan. With the paid plans(Foundation, Growth, and Scale), you have access to a dedicated IP and can send between 50,000 to 100,000 emails per month, depending on the plan you choose.",
    sendgrid:
      "A free plan on SendGrid allows you to send up to 100 emails per day; upgrading to a paid plan, you can send up to 1,500 emails per day and no more than 400 emails per hour. If you use the custom pricing or premier plan, you can send up to 1.5 million emails in a month with access to a dedicated IP.",
    amazonSes:
      "When you're on a sandbox account, you're limited to 200 emails/24hours. The number varies based on your request from Amazon via email if your account is out of the sandbox. With a custom plan, you have access to 3 dedicated IPs and can send over 2 million emails, and your fee will vary according to your specifications.",
    mailjet:
      "You can only send 200 messages/day.  However, when you are on the custom plan, you access a dedicated IP, and there’s no limit to the number of emails you can send..",
    mandrill:
      "The threshold for Mandrill is 12,000 emails and can be adjusted once you upgrade to a paid account. There are different paid plans, from a maximum of 500,000 emails to over 4 million emails. While a custom pricing plan will give you access to a dedicated IP and allow you to send up to 249 million emails.",
    onesignalEmail:
      "The threshold for OneSignal is 6,000 requests/second for all paid plans and 150 requests/second for free plans. The Free, Growth and Professional plans allow you to use shared IPs, but when you subscribe to the Enterprise plan, you can use a dedicated IP and pay a custom fee depending on the number of emails.",
    sparkpost:
      "SparkPost's thresholds vary per plan, beginning from 50,000 emails to about 1 million emails per month. The Premier plan allows you to use a dedicated IP and send up to 5 million emails. In contrast, the Enterprise plan allows you to send over 5 million emails with multiple dedicated IPs.",
  },
};

export default emailFeatures;
