"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello = (name) => console.log("Hello", name);
hello("Tarou");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// CORSの許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// body-parserに基づいた着信リクエストの解析
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// GetとPostのルーティング
const router = express_1.default.Router();
router.get("/api/getTest", (req, res) => {
    const resopnse = {
        query: req.query,
        hello: "hello",
    };
    res.send(resopnse);
});
router.post("/api/postTest", (req, res) => {
    res.send(req.body);
});
app.use(router);
// 3000番ポートでAPIサーバ起動
app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});
//# sourceMappingURL=index.js.map