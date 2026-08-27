import app from "./app.js";
import { connectDB } from "./config/db.js";

//Connecting Database
connectDB();

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
