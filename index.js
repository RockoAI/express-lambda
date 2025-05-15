// index.js
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Dev server running at http://localhost:${PORT}`);
});

// For local development, you can run this file directly
