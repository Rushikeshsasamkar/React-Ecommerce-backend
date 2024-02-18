const mongoose = require("mongoose");


const mongodbCluster='process.env.MONGO_DB_URL';
// bZl3Qv3K1cL1we8v
// connect to db
mongoose
    .connect(mongodbCluster, {})
    .then(() => console.log("DB Connected..."))
    .catch((err) => console.log(`DB Connection Error : ${err}`));
