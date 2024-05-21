import config from "./config";
import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
console.log(process.cwd());
