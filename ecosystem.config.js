module.exports = {
  apps : [
    {
      name: "codemate-ai-backend",
      script: "./dist/bin/www.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
}