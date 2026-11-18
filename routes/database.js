const express = require("express");
const { testDatabaseConnection } = require("../config/database");

const router = express.Router();

router.get("/test", async (req, res) => {
    try {
        const result = await testDatabaseConnection();
        res.json({
            success: true,
            message: "SQL Server connection is available.",
            data: result
        });
    } catch (error) {
        console.error("Database test failed:", error.message);
        res.status(503).json({
            success: false,
            message: "Unable to connect to SQL Server.",
            error: error.message
        });
    }
});

module.exports = router;
