module.exports = {
  apps : [
    {
      name: "codemate-ai-backend",
      script: "./dist/bin/www.ts",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
}