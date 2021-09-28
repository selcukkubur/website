import {
  documentation,
  featuresTemplates,
  featuresRouting,
  featuresProfiles,
  featuresAutomations,
  blog,
  pricing,
  discord,
  help,
  about,
} from "constants/urls";

import TemplatesIcon from "./icons/Templates";
import PreferencesIcon from "./icons/Preferences";
import RoutingIcon from "./icons/Routing";
import AutomationsIcon from "./icons/Automations";
import StatusIcon from "./icons/Status";
import CommunityIcon from "./icons/Community";
import HelpCenterIcon from "./icons/HelpCenter";

export default [
  {
    title: "Blog",
    link: blog,
  },
  {
    title: "Documentation",
    link: documentation,
  },
  {
    title: "Features",
    items: [
      {
        title: "Templates",
        link: featuresTemplates,
        icon: TemplatesIcon,
      },
      {
        title: "Preferences",
        link: featuresProfiles,
        icon: PreferencesIcon,
      },
      {
        title: "Routing",
        link: featuresRouting,
        icon: RoutingIcon,
      },
      {
        title: "Automations",
        link: featuresAutomations,
        icon: AutomationsIcon,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "About",
        link: about,
        icon: CommunityIcon,
      },
      {
        title: "Help Center",
        link: help,
        isExternalLink: true,
        icon: HelpCenterIcon,
      },
      {
        title: "Discord",
        link: discord,
        isExternalLink: true,
        icon: StatusIcon,
      },
    ],
  },
  {
    title: "Pricing",
    link: pricing,
  },
];
