import { Heading, Paragraph, Image } from "./components";

import introduction from "../../../../public/images/pages/guides/developers-guide-notifications/introduction.jpg";
import slackDiagram from "../../../../public/images/pages/guides/developers-guide-notifications/slack-diagram.jpeg";

const Introduction = () => (
  <>
    <Image src={introduction} alt="Introduction" />
    <Paragraph>
      Startup engineering is all about weighing the return on investment that
      various efforts will yield in order to decide where to spend your precious
      development time. Depending on the maturity of your startup, and
      complexity of your notification use cases, some parts of this guide may be
      more useful to you than others. This guide aims to give you the
      information you need to make the best actitectural choices based on your
      particular maturity and requirements.
    </Paragraph>
    <Heading>What Makes A Great Notification System?</Heading>
    <Paragraph>
      There are three core components to a great notification system. The first
      is that it provides a fantastic user experience to the end user. This
      essentially boils down to delivering the right message, to the right user,
      with the right frequency, via the right channel, at the right time. A
      notification system that accomplishes this will delight your users and
      make your product more successful.
    </Paragraph>
    <Paragraph>
      The second part to a great notification system is that it is easy to use
      and empowering to your internal team. For technical users that means
      having great developer tooling and documentation. For non-technical users
      that means having an intuitive design and editing interface and good
      visibility as well as useful data and analytics.
    </Paragraph>
    <Paragraph>
      The third part to a great notification system is ensuring that it is well
      crafted from a technical perspective. That means building a system that is
      both reliable, scaleable, and is built with deliverability top of mind
    </Paragraph>
    <Heading>Notification Systems Are Really Hard</Heading>
    <Paragraph>
      The explosion in communication APIs has made the engineering work required
      to send a single notification fairly trivial. Need to send an email? Make
      a call to Mailgun. Need to send an SMS? Make a call to Twilio. Need to
      send a push notification? Make a call to OneSignal. This explosion in
      communication APIs also means that users are more inundated with
      notifications than ever, and that your notification user experience can be
      a real differentiator or detractor for your product.
    </Paragraph>
    <Paragraph>
      So what does a great notification system look like? Luckily many startups
      that were founded in the cloud era, but are now large public companies
      with plenty of resources to perfect their notifications have shared their
      system architecture publicly. LinkedIn, AirBnB, Slack, and others have
      shared their approach to building out their product notifications, and
      they all come down to the same common goal: deliver the right message,
      through the right channel, to the right users, at the right time. Building
      a system that accomplishes this goal requires careful consideration around
      your end user experience requirements, internal user experience
      requirements, and your technical requirements.
    </Paragraph>
    <Image src={slackDiagram} alt="Slack Diagram" />
  </>
);

export default Introduction;
