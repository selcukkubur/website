import { CodeExample } from "components/common/CodeBox";

const examples: CodeExample[] = [
  {
    languageName: "Delivery is delayed",
    languageCode: "json",
    code: `
// Shipment delayed email alert.
{
  "message": {
    "to": {
      "email": "{{email}}"
    },
    "content": {
      "title": "Delay in shipment",
      "body": "Hi {{first_name}}, we're sorry but there has been 
      a delay in your shipment. You can track your shipment
      here: {{tracking_link}}"
    },
    "data": {
      "email": "user@company.com",
      "first_name": "Nick",
      "tracking_link": "tracking.ups.com"
    }
  }
}
`,
  },
  {
    languageName: "Multi-channel billing alert",
    languageCode: "json",
    code: `
// Send an Slack notification to a user if they are 
// online, if not fallback to sending an email.
  "message": {
    "to": {
      "slack": "{{slack_id}}",
      "email": "{{email}}"
    },
    "channels": { "$best": ["slack", "email"] },
    "content": {
      "title": "You have exceeded your billing credits",
      "body": "{{org_name}} has exceeded their billing credits
      this month. The card on file will be charged for excess usage.",
      "button": "View Billing",
      "href": "{{billing_url}}"
    },
    "data": {
      "user_id": "3jdu4he2938",
      "email": "user@company.com",
      "org_name": "Microsoft"
    }
  }
}
`,
  },
];

export default examples;
