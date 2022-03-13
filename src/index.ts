import express from "express";
import router from "./routes/v1/index";

const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next()  ;


});


// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", router);
// // GetとPostのルーティング
// const router: express.Router = express.Router();
// router.get("/api/getTest", (req: express.Request, res: express.Response) => {
//   const resopnse = {
//     query: req.query,
//     hello: "hello",
//   };
//   res.send(resopnse);
// });
// router.post("/api/postTest", (req: express.Request, res: express.Response) => {
//   res.send(req.body);
// });
// app.use(router);

// 3000番ポートでAPIサーバ起動
app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
