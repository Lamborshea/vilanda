module.exports = {
  apps: [
    {
      name: "vilanda-express",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      instances: "max",
      exec_mode: "cluster",
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm Z"
    }
  ],
  deploy: {
    production: {
      host: "121.196.223.8",
      ref: "origin/master",
      repo: "git@github.com:Lamborshea/vilanda.git",
      // path: "/var/www/vilanda.xienanbo.com/vilanda/vilanda-express",
      "post-deploy":
        "yarn install && pm2 reload ecosystem.config.js --env production"
    },
    dev: {
      host: "121.196.223.8",
      ref: "origin/master",
      repo: "git@github.com:Lamborshea/vilanda.git",
      // path : '/var/www/vilanda.xienanbo.com/vilanda/vilanda-express',
      "post-deploy":
        "yarn install && pm2 reload ecosystem.config.js --env development",
      env: {
        NODE_ENV: "development"
      }
    }
  }
};
