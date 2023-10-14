const mongoose = require("mongoose");


const mongodbCluster='mongodb+srv://rushikeshsasamakar94:Rushi@111@clusterecommerce.7kfrpkc.mongodb.net/';

// connect to db
mongoose
    .connect(mongodbCluster, {})
    .then(() => console.log("DB Connected..."))
    .catch((err) => console.log(`DB Connection Error : ${err}`));
