module.exports = {
  apps: [
    {
      name: "kinattukara-frontend",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "/var/www/kinattukara.bvox.in/kinattukara/frontend/build",
        PM2_SERVE_PORT: 5030,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
      watch: false,
      max_memory_restart: "200M",
    },
    {
      name: "kinattukara-backend",
      script: "python3",
      args: "-m uvicorn server:app --host 127.0.0.1 --port 5031",
      cwd: "/var/www/kinattukara.bvox.in/kinattukara/backend",
      interpreter: "none",
      watch: false,
      max_memory_restart: "200M",
      env: {
        MONGO_URL: "mongodb://localhost:27017",
        DB_NAME: "kinattukara_db",
        CORS_ORIGINS: "https://kinattukara.bvox.in,http://localhost:5030",
      },
    },
  ],
};
