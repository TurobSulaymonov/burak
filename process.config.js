module.exports = {
    apps : [{
      name   : "BURAK",
      cwd: "./",
      script : "./dist/server.js",
      false: false,
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      },
      instances: 1,
      exec_mode: "cluster" 
    }]
  }