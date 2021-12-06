import {
  pricing,
  docs,
  blog,
  about,
  careers,
  help,
  discord,
  updates,
  status,
  docsApiReference,
  providers,
  libraries,
  security,
} from "constants/urls";

export default [
  {
    title: "Product",
    items: [
      { title: "Pricing", link: pricing },
      { title: "Providers", link: providers },
    ],
  },
  {
    title: "Developers",
    items: [
      { title: "Documentation", link: docs },
      { title: "API", link: docsApiReference },
      { title: "Libraries", link: libraries },
      { title: "Status", link: status },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", link: blog },
      { title: "Help Center", link: help },
      { title: "Community", link: discord },
      { title: "Product Updates", link: updates },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", link: about },
      { title: "Careers", link: careers },
      { title: "Security", link: security },
    ],
  },
];
