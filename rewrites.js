module.exports = [
  {
    source: "/docs/",
    destination: `${process.env.DOCS_URL || ""}`,
  },
  {
    source: "/docs/:slug*",
    destination: `${process.env.DOCS_URL || ""}/:slug*`,
  },
];
