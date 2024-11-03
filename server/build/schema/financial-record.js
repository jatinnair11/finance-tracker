"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const financialRecordSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true },
});
const FinancialRecordModel = mongoose_1.default.model("FinancialRecord", financialRecordSchema);
exports.default = FinancialRecordModel;
