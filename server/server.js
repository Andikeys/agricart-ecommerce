const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files (if needed)
app.use(express.static("public"));

// Sample route
app.get("/", (req, res) => {
    res.send("Agricart Server is Running!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
