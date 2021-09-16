import { CodeExample } from "components/common/CodeBox";

const examples: CodeExample[] = [
  {
    languageName: "Weekly Digest",
    languageCode: "json",
    code: `
// Send an email welcoming a new user to your product.
// Send a weekly product usage email to a list of users, 
// pulling the data for each user from an endpoint.
{
  "message": {
    "to": {
      "list_id": "weekly_subscribers",
      "template": "weekly_product_digest",
      "data_source":  {
        "action": "fetch-data",
        "webhook": { "url": "https://main.app/digest" }
      }
    }
  }
}
`,
  },
  {
    languageName: "Welcome Email",
    languageCode: "json",
    code: `
// Send an email welcoming a new user to your product.
{
  "message": {
    "to": {
      "email": "{{email}}"
    },
    "content": {
      "title": "Welcome {{first_name}}!",
      "body": "It's so great to have you here!"
    },
    "data": {
      "email": "user@company.com",
      "first_name": "Nick"
    }
  }
}
`,
  },
];

export default examples;