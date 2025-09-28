"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const connect = await mongoose_1.default.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
        console.log("connected to mongodb succesfully", connect.connection.host, connect.connection.name);
    }
    catch (error) {
        console.log("failed to connect with mongodb", error);
    }
};
exports.default = connectDB;
