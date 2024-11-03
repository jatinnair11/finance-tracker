"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const financial_record_1 = tslib_1.__importDefault(require("../schema/financial-record"));
const router = express_1.default.Router();
// GET records by user ID
router.get("/getAllByUserID/:userId", (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const records = yield financial_record_1.default.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).send("No records found for the user.");
        }
        res.status(200).send(records);
    }
    catch (err) {
        next(err); // pass error to Express error handler
    }
}));
// POST new financial record
router.post("/", (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRecordBody = req.body;
        const newRecord = new financial_record_1.default(newRecordBody);
        const savedRecord = yield newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (err) {
        next(err); // pass error to Express error handler
    }
}));
// PUT update financial record
router.put("/:id", (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = yield financial_record_1.default.findByIdAndUpdate(id, newRecordBody, { new: true });
        if (!record)
            return res.status(404).send();
        res.status(200).send(record);
    }
    catch (err) {
        next(err); // pass error to Express error handler
    }
}));
// DELETE financial record
router.delete("/:id", (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const record = yield financial_record_1.default.findByIdAndDelete(id);
        if (!record)
            return res.status(404).send();
        res.status(200).send(record);
    }
    catch (err) {
        next(err); // pass error to Express error handler
    }
}));
exports.default = router;
