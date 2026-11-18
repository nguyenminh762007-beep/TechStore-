require("dotenv").config();

const express = require("express");
const path = require("node:path");
const databaseRoutes = require("./routes/database");
const productRoutes = require("./routes/products");
const { testDatabaseConnection } = require("./config/database");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json({ limit: "1mb" }));
app.use("/api/database", databaseRoutes);
app.use("/api/products", productRoutes);

app.get(["/", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found."
    });
});

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    console.error("Unhandled request error:", error.message);
    res.status(500).json({
        success: false,
        message: "Internal server error."
    });
});

async function startServer() {
    try {
        const result = await testDatabaseConnection();
        console.log(
            `SQL Server connected: database=${result.databaseName}`
        );
    } catch (error) {
        console.error(
            `SQL Server startup check failed: ${error.message}`
        );
    }

    app.listen(port, () => {
        console.log(`Express API listening on http://localhost:${port}`);
    });
}

startServer();
