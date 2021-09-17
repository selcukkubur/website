import {
  documentation,
  featuresTemplates,
  featuresRendering,
  featuresRouting,
  featuresProfiles,
  featuresAutomations,
  blog,
  pricing,
  apiReference,
  discord,
  status,
  help,
  providers,
} from "constants/urls";

export default [
  // {
  //     title: "Features",
  //     link: "/",
  // },
  {
    title: "Product",
    items: [
      {
        title: "Templates",
        link: featuresTemplates,
        icon: "DocumentationIcon",
        className: "documentationIcon",
      },
      {
        title: "Preferences",
        link: featuresProfiles,
        icon: "APIReferenceIcon",
        className: "apiReferenceIcon",
      },
      {
        title: "Routing",
        link: featuresRouting,
        icon: "CommunityIcon",
        className: "communityIcon",
      },
      {
        title: "Automations",
        link: featuresAutomations,
        icon: "StatusIcon",
        className: "statusIcon",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "Documentation",
        link: documentation,
        isExternalLink: true,
        icon: "DocumentationIcon",
        className: "documentationIcon",
      },
      {
        title: "API Reference",
        link: apiReference,
        isExternalLink: true,
        icon: "APIReferenceIcon",
        className: "apiReferenceIcon",
      },
      {
        title: "Community",
        link: discord,
        isExternalLink: true,
        icon: "CommunityIcon",
        className: "communityIcon",
      },
      {
        title: "Status",
        link: status,
        isExternalLink: true,
        icon: "StatusIcon",
        className: "statusIcon",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", link: blog, icon: "BlogIcon", className: "blogIcon" },
      {
        title: "Help Center",
        link: help,
        isExternalLink: true,
        icon: "HelpCenterIcon",
        className: "helpIcon",
      },
    ],
  },
  {
    title: "Pricing",
    link: pricing,
  },
];
