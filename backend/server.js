const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 7000;

console.log("🔥 SERVER VERSION UPDATED");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
