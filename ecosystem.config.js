module.exports = {
  apps: [
    {
      script: "node lib/index.js",
      name: 'rsshub',
      max_memory_restart: '300M',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
}
