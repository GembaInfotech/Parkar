module.exports = {
    apps: [
      {
        name: "parking-app",
        script: "serve",
        args: "-s build -p 3000",
        interpreter: "none", // Tells PM2 to use this as a command
      },
    ],
  };
  