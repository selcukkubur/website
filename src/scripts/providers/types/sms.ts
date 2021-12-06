export const smsProviders = [
  "messagebird",
  "sinch",
  "aws-sns",
  "africas-talking",
  "messagemedia",
  "plivo",
  "telnyx",
  "vonage",
];

export type SMSProvider = typeof smsProviders[number];
