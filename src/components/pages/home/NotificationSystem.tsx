import { Box } from "@chakra-ui/react";
import CommonNotificationSystem from "components/common/NotificationSystem";

const notificationPoints = [
  {
    icon: "/images/pages/home/notification-system/integrateIcon.svg",
    title: "Integrate your channels",
    description:
      "Access all your notification channels through a single API –– and add new ones in minutes.",
  },
  {
    icon: "/images/pages/home/notification-system/designIcon.svg",
    title: "Design your notification",
    description:
      "Drag and drop content blocks, add your own custom code, or do a mix of both.",
  },
  {
    icon: "/images/pages/home/notification-system/orchestrate.svg",
    title: "Orchestrate your workflow",
    description:
      "Trigger notifications based on user actions, while respecting their preferences and your rules.",
  },
  {
    icon: "/images/pages/home/notification-system/collectRealTime.svg",
    title: "Collect real-time insights",
    description:
      "Quickly access relevant cross-channel stats including delivery status and engagement data.",
  },
];

const NotificationSystem = () => {
  return (
    <Box background="linear-gradient(180deg,#fffffe,#fcede3 80.21%)">
      <CommonNotificationSystem
        title="Your complete notifications system"
        description="From integrations to insights, we handle all of the heavy lifting"
        points={notificationPoints}
      />
    </Box>
  );
};

export default NotificationSystem;
