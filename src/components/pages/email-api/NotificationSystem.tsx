import { Box } from "@chakra-ui/react";
import CommonNotificationSystem from "components/common/NotificationSystem";

const notificationPoints = [
  {
    icon: "/images/pages/home/notification-system/integrateIcon.svg",
    title: "Bring Your Own Provider",
    description:
      "Send transactional emails  through any and all email providers. SendGrid, Postmark, Mailgun, Gmail, we support them all.",
  },
  {
    icon: "/images/pages/home/notification-system/designIcon.svg",
    title: "Email Template Designer",
    description:
      "We beleive transactional emails should still look great. Our designer lets you build beautiful and dynamic email templates.",
  },
  {
    icon: "/images/pages/home/notification-system/orchestrate.svg",
    title: "Automated Email Workflows",
    description:
      "Design complex automated email workflows with steps that include delay, check data, send to list, and more.",
  },
  {
    icon: "/images/pages/home/notification-system/collectRealTime.svg",
    title: "Analyze Detailed Logs",
    description:
      "Courier provides detailed logs of every email sent through our API. This helps identify issues and ensure deliverability. ",
  },
];

const NotificationSystem = () => {
  return (
    <Box background="linear-gradient(180deg,#fffffe,#fcede3 80.21%)">
      <CommonNotificationSystem
        title="More than just an email API"
        description="Courier goes way beyond the traditional transactional email APIs. Courier is your complete notification infrastructure."
        points={notificationPoints}
      />
    </Box>
  );
};

export default NotificationSystem;
