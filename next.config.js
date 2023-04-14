module.exports = {
  // env 내용 추가
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  webpack(config) {
    return config;
  }
};
