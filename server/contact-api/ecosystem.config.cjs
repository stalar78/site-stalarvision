module.exports = {
  apps: [
    {
      name: 'stalarvision-contact-api',
      script: 'src/server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      restart_delay: 3000,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        CONTACT_API_HOST: '127.0.0.1',
        CONTACT_API_PORT: '8010',
      },
    },
  ],
};
