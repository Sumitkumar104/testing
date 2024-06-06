"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post("/sum", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;
    // When we run the unit test case for this route . we mock the database call or redis call .
    // Mock simply means we are not calling the actual database or redis server. we call an empty function or define it empty .
    yield db_1.prismaClient.sum.create({
        data: {
            a: a,
            b: b,
            result: answer
        }
    });
    console.log(Object.keys(db_1.prismaClient));
    res.json({
        answer
    });
}));
