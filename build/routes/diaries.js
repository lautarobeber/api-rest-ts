"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const DiarySerives = __importStar(require("../services/diariesServices"));
const diary_1 = __importDefault(require("../model/diary"));
const router = express_1.default.Router();
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let diaries = yield diary_1.default.find();
        res.json(diaries);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}));
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const diary = DiarySerives.getOneEntry(+id);
    return diary != null ? res.send(diary) : res.status(404);
});
router.delete('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield diary_1.default.deleteMany({});
        console.log("Todos los documentos fueron eliminados exitosamente.");
        res.status(200).send("Eliminado exitosamente");
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { weather, visibility, comment } = req.body;
        const newContact = new diary_1.default({ weather, visibility, comment });
        const savedContact = yield newContact.save();
        res.status(201).json(savedContact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
