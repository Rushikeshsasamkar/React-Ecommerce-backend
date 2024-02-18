const mongoose = require("mongoose");


const mongodbCluster='process.env.MONGO_DB_URL';

// connect to db
mongoose
    .connect(mongodbCluster, {})
    .then(() => console.log("DB Connected..."))
    .catch((err) => console.log(`DB Connection Error : ${err}`));
