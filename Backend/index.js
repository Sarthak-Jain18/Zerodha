require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authMiddleware = require("./authMiddleware.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const Holding = require("./models/holding.js");
const Order = require("./models/order.js");
const Position = require("./models/position.js");
const WatchList = require("./models/watchlist.js");

const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Express app started!");
    mongoose.connect(DB_URL);
    console.log("DB connection successful!");
});

// ROUTING

app.get("/", (req, res) => {
    res.send("Website working");
});

app.get("/allHoldings", async (req, res) => {
    const data = await Holding.find();
    res.send(data);
});

app.get("/allPositions", async (req, res) => {
    const data = await Position.find();
    res.send(data);
});

app.get("/allWatchlist", async (req, res) => {
    const data = await WatchList.find();
    res.send(data);
});

app.get("/allOrders", authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.uid });
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/sellStock", authMiddleware, async (req, res) => {
    try {
        const { name, qty } = req.body;

        const stock = await Order.findOne({ userId: req.user.uid, name });
        if (!stock) {
            return res.status(404).json({ message: "Stock not found" });
        }

        stock.qty -= Number(qty);
        if (stock.qty <= 0) {
            await Order.deleteOne({ _id: stock._id });
        } else {
            await stock.save();
        }

        const orders = await Order.find({ userId: req.user.uid });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error selling stock" });
    }
});

app.post("/buyStock", authMiddleware, async (req, res) => {
    try {
        const { name, qty, price } = req.body;
        const qtyNum = Number(qty);

        const existingStock = await Order.findOne({ userId: req.user.uid, name });
        if (!existingStock) {
            const newOrder = new Order({ userId: req.user.uid, name, qty: qtyNum, price });
            await newOrder.save();
        } else {
            existingStock.qty += qtyNum;
            await existingStock.save();
        }

        const orders = await Order.find({ userId: req.user.uid });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error buying stock" });
    }
});


