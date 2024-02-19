const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongodbCluster='mongodb+srv://technicalprogramming111:bZl3Qv3K1cL1we8v@cluster0.pwauodx.mongodb.net/';
// bZl3Qv3K1cL1we8v
// connect to db
mongoose
    .connect(mongodbCluster, {})
    .then(() => console.log("DB Connected..."))
    .catch((err) => console.log(`DB Connection Error : ${err}`));
