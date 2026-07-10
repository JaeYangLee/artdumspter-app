sample user for testing
  sampleuser@gmail.com
  sampleuser1234

++ For frontent deployment
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "cp -r dist/* /var/www/artdumpster-app/",
    "build:deploy": "npm run build && npm run deploy"
  },

