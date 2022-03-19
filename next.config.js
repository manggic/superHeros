/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL : 'mongodb+srv://Manish:DdHT2yQKBIc0Rnnh@cluster0.p11rr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
