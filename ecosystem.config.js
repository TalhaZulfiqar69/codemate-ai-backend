module.exports = {
  apps : [
    {
      name: "codemate-ai-backend",
      script: "./bin/www",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
}