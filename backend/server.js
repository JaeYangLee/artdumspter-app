require("dotenv").config();
const app = require("./app");


const PORT = process.env.PORT || 7000;

console.log("🔥 SERVER VERSION UPDATED");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
