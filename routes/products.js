const express = require("express");
const { getProducts, saveProduct } = require("../services/products");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await getProducts();
        res.json({
            success: true,
            data: products
        });
    } catch (error) {
        console.error("Product query failed:", error.message);
        res.status(500).json({
            success: false,
            message: "Không thể đọc sản phẩm từ SQL Server.",
            error: error.message
        });
    }
});

router.post("/", async (req, res) => {
    const name = typeof req.body.name === "string"
        ? req.body.name.trim()
        : "";
    const price = Number(req.body.price);

    if (!name || name.length > 50) {
        return res.status(400).json({
            success: false,
            message: "Tên sản phẩm phải có từ 1 đến 50 ký tự."
        });
    }

    if (!Number.isFinite(price) || price < 0) {
        return res.status(400).json({
            success: false,
            message: "Giá sản phẩm phải là số không âm."
        });
    }

    try {
        const product = await saveProduct(name, price);
        res.status(product.created ? 201 : 200).json({
            success: true,
            data: product,
            message: product.created
                ? "Đã lưu sản phẩm vào SQL Server."
                : "Sản phẩm đã tồn tại; dữ liệu hiện có được giữ nguyên."
        });
    } catch (error) {
        console.error("Product save failed:", error.message);
        res.status(500).json({
            success: false,
            message: "Không thể lưu sản phẩm vào SQL Server.",
            error: error.message
        });
    }
});

module.exports = router;
