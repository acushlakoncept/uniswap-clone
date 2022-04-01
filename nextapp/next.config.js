/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_APP_ID: process.env.SANITY_APP_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  }
}
