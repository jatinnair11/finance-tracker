"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//mongodb+srv://ajatinnair:TKtAQ5J14cdhbJfr@finnacetracker.dm0lh.mongodb.net/
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const financial_records_1 = tslib_1.__importDefault(require("./routes/financial-records"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const mongoURI = "mongodb+srv://ajatinnair:TKtAQ5J14cdhbJfr@finnacetracker.dm0lh.mongodb.net/";
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));
app.use("/financial-records", financial_records_1.default);
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
