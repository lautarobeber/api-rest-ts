"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
const uri = process.env.URI;
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('connected to MongoDB');
})
    .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', express_1.default.static('dist'));
// _ Ignora el parametro
app.get("/ping", (_req, res) => {
    console.log("alguien pinguino");
    res.send("pong");
});
app.use("/api/diaries", diaries_1.default);
app.get('*', (_req, res) => {
    res.send("Aca no hay nada!");
    ;
});
app.listen(PORT || 3000, () => {
    console.log(`server running on port ${PORT} `);
});
exports.handler = (0, serverless_http_1.default)(app);
