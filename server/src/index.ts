import * as express from 'express';

const app: express.Application = express();

app.get("/", function (req: any, res: any) {
  res.send("Hello!");
});

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
