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

// app.get("/addHoldings", async (req, res) => {
//     const init_holdings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     await Holding.insertMany(init_holdings);
//     res.send("Holdings added!");
// });

// app.get("/addPositions", async (req, res) => {
//     const init_positions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     await Position.insertMany(init_positions);
//     res.send("Position added!");
// });

// app.get("/addWatchlist", async (req, res) => {
//     const init_watchlist = [
//         {
//             name: "INFY",
//             price: 1555.45,
//             percent: "-1.60%",
//             isDown: true,
//         },
//         {
//             name: "ONGC",
//             price: 116.8,
//             percent: "-0.09%",
//             isDown: true,
//         },
//         {
//             name: "TCS",
//             price: 3194.8,
//             percent: "-0.25%",
//             isDown: true,
//         },
//         {
//             name: "KPITTECH",
//             price: 266.45,
//             percent: "3.54%",
//             isDown: false,
//         },
//         {
//             name: "QUICKHEAL",
//             price: 308.55,
//             percent: "-0.15%",
//             isDown: true,
//         },
//         {
//             name: "WIPRO",
//             price: 577.75,
//             percent: "0.32%",
//             isDown: false,
//         },
//         {
//             name: "M&M",
//             price: 779.8,
//             percent: "-0.01%",
//             isDown: true,
//         },
//         {
//             name: "RELIANCE",
//             price: 2112.4,
//             percent: "1.44%",
//             isDown: false,
//         },
//         {
//             name: "HUL",
//             price: 512.4,
//             percent: "1.04%",
//             isDown: false,
//         },
//     ];
//     await WatchList.insertMany(init_watchlist);
//     res.send("WatchList added!");
// });

// app.get("/addOrders", async (req, res) => {
//     const init_orders = [
//         { name: "INFY", qty: 2, price: 1555.45 },
//         { name: "TCS", qty: 5, price: 3678.25 },
//         { name: "HDFCBANK", qty: 3, price: 1642.10 },
//         { name: "RELIANCE", qty: 4, price: 2789.80 },
//         { name: "ICICIBANK", qty: 6, price: 972.65 },
//         { name: "SBIN", qty: 10, price: 655.30 },
//         { name: "WIPRO", qty: 8, price: 438.90 },
//         { name: "AXISBANK", qty: 7, price: 1105.75 },
//         { name: "HCLTECH", qty: 3, price: 1420.55 },
//         { name: "ITC", qty: 12, price: 475.60 }
//     ];
//     await Order.insertMany(init_orders);
//     res.send("Orders added!");
// });

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

