const admin = require("./firebase.js");

async function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Expect: Bearer <token>
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // contains uid, email, etc.
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = authMiddleware;


