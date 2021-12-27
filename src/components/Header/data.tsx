import {
  pricing,
  docs,
  docsApiReference,
  docsTutorials,
  docsLibraries,
  docsProviders,
  developersGuideNotifications,
  enterprise,
  featuresTemplates,
  featuresRouting,
  featuresAutomations,
  featuresProfiles,
  useCaseTransactional,
  useCaseUserActivity,
  useCaseAlert,
  useCaseAction,
  blog,
  about,
  discord,
  careers,
} from "constants/urls";

import { DropdownProps } from "./DesktopMenu/Dropdown";
import type { BlogPost } from "scripts/GetBlogPosts";
import { colorMap } from "components/pages/blog/common/Tag";

interface MenuItem {
  label: string;
  link?: string;
  dropdown?: DropdownProps;
}

const createItems = (blogPosts: BlogPost[] = []): MenuItem[] => [
  {
    label: "Product",
    dropdown: {
      columns: [
        {
          title: "Features",
          color: "primary.salmon",
          items: [
            {
              label: "Templating",
              description: "Perfectly formatted for every channel.",
              icon: require("./icons/features/templating.svg"),
              link: featuresTemplates,
            },
            {
              label: "Routing",
              description: "Correct users through the best channels.",
              icon: require("./icons/features/routing.svg"),
              link: featuresRouting,
            },
            {
              label: "Preferences",
              description: "User-first notifications.",
              icon: require("./icons/features/preferences.svg"),
              link: featuresProfiles,
            },
            {
              label: "Automations",
              description: "Program complex notification workflows.",
              icon: require("./icons/features/automations.svg"),
              link: featuresAutomations,
            },
            // {
            //   label: "Logging",
            //   description: "A short to the point one liner goes here.",
            //   icon: require("./icons/features/logging.svg"),
            //   link: getStarted,
            // },
          ],
        },
        {
          title: "Use Cases",
          color: "primary.violet",
          items: [
            {
              label: "Transactional",
              description: "Unify all your transactional notifications.",
              icon: require("./icons/use-cases/transactional.svg"),
              link: useCaseTransactional,
            },
            {
              label: "Alerts",
              description:
                "Ensure deliverability and visibility of user alerts.",
              icon: require("./icons/use-cases/alerts.svg"),
              link: useCaseAlert,
            },
            {
              label: "User Activity",
              description: "Keep users up to speed with key activities.",
              icon: require("./icons/use-cases/user-activity.svg"),
              link: useCaseUserActivity,
            },
            {
              label: "Action",
              description:
                "Proactively notify users when their action is required.",
              icon: require("./icons/use-cases/action-requested.svg"),
              link: useCaseAction,
            },
            // {
            //   label: "Digest",
            //   description: "A short to the point one liner goes here.",
            //   icon: require("./icons/use-cases/digest.svg"),
            //   link: getStarted,
            // },
          ],
        },
      ],
      bottomHighlight: {
        label: "Enterprise",
        description: "Complete product notification infrastructure.",
        link: enterprise,
        buttonLabel: "Learn more",
      },
    },
  },
  {
    label: "Docs",
    link: docs,
    dropdown: {
      topHighlight: {
        color: "primary.salmon",
        label: "Quick Start",
        description: "Start sending in 4 minutes.",
        icon: require("./icons/docs/quick-starts.svg"),
        link: docs,
      },
      title: "All Docs",
      items: [
        {
          label: "API Reference",
          icon: require("./icons/docs/api-reference.svg"),
          link: docsApiReference,
        },
        {
          label: "Tutorials",
          icon: require("./icons/docs/tutorials.svg"),
          link: docsTutorials,
        },
        {
          label: "Libraries",
          icon: require("./icons/docs/libraries.svg"),
          link: docsLibraries,
        },
        {
          label: "Providers",
          icon: require("./icons/docs/providers.svg"),
          link: docsProviders,
        },
      ],
    },
  },
  {
    label: "Resources",
    dropdown: {
      sidebar: {
        title: "Resources",
        items: [
          {
            label: "Blog",
            icon: require("./icons/resources/blog.svg"),
            link: blog,
          },
          {
            label: "About",
            icon: require("./icons/resources/about.svg"),
            link: about,
          },
          {
            label: "Discord",
            icon: require("./icons/resources/discord.svg"),
            link: discord,
          },
          {
            label: "Careers",
            icon: require("./icons/resources/careers.svg"),
            link: careers,
          },
        ],
      },
      title: "From the blog",
      cards: blogPosts.map((post) => {
        const postTag = post.fields.tags[0].fields.name;
        const postTagColor = colorMap[postTag.toUpperCase()];

        return {
          tag: postTagColor
            ? {
                bgColor: postTagColor.bg,
                textColor: postTagColor.color,
                label: postTag,
              }
            : undefined,
          label: post.fields.title,
          link: `/blog/${post.fields.slug}`,
          image: `https:${post.fields.thumbnail.fields.file.url}`,
        };
      }),
    },
  },
  { label: "Guide", link: developersGuideNotifications },
  { label: "Pricing", link: pricing },
];

export default createItems;
