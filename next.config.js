const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
module.exports = {
  env: {
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CLIENT_CODE: process.env.CLIENT_CODE,
  },
};
