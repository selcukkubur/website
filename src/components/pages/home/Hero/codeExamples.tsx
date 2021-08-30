import { CodeExample } from "components/common/CodeBox";

const examples: CodeExample[] = [
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
  {
    languageName: "Multi-Channel Notification",
    languageCode: "json",
    code: `
// Send an in-app toast notification to a user if they are 
// in your app, if not fallback to sending an email.   
{
  "message": {
    "to": {
      "courier_push": "{{user_id}}",
      "email": "{{email}}",
    },
    "channels": { "$best": ["courier-push", "email"] },
    "content": {
      "title": "{{collaborator}} mentioned your in a comment.",
      "body": "{{comment_summary}}",
      "button": "View",
      "href": "{{comment_url}}"
    },
    "data": {
      "user_id": "3jdu4he2938",
      "email": "user@company.com",
      "first_name": "Nick"
    }
  }
}

`,
  },
  {
    languageName: "Weekly Digest",
    languageCode: "json",
    code: `
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
];

export default examples;
