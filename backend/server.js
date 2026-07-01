const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/calculate", (req, res) => {
    const { principal, rate, time } = req.query;

    if (!principal || !rate || !time) {
        return res.status(400).json({ error: "principal, rate, and time are required" });
    }

    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
        return res.status(400).json({ error: "All values must be positive numbers" });
    }

    const simpleInterest = (p * r * t) / 100;
    const totalAmount = p + simpleInterest;

    res.json({ simpleInterest, totalAmount });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});