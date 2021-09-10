import CommonNotificationSystem from "components/common/NotificationSystem";

const notificationPoints = [
  {
    icon: require("../../../../public/images/pages/home/notification-system/designIcon.svg"),
    title: "Dynamic templates",
    description:
      "Utilize our drag-and-drop builder, add your own custom code, or do a mix of both. Then easily collaborate on designs with others.",
  },
  {
    icon: require("../../../../public/images/pages/home/notification-system/routingIcon.svg"),
    title: "Advanced routing",
    description:
      "Use both conditional logic and user preferences to control who sees what, when, and through which channel.",
  },
  {
    icon: require("../../../../public/images/pages/home/notification-system/secureIcon.svg"),
    title: "Secure and compliant",
    description:
      "Courier is GDPR and SOC 2 Type 1 compliant, ensuring your customer data is safe.",
  },
];

const NotificationSystem = () => {
  return (
    <CommonNotificationSystem
      title="A complete notifications platform"
      description="Courier’s API and Studio enable developers to deliver the right message to the right user at the right time."
      points={notificationPoints}
    />
  );
};

export default NotificationSystem;
