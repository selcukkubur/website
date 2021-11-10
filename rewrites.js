module.exports = [
  {
    source: "/docs/:slug*",
    destination: `${process.env.DOCS_URL || ""}/:slug*`,
  },
];
