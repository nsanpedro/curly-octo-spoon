import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/companyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then((db) => console.log("DB IS CONNECTED!"))
  .catch((err) => console.log("error ocurred ==> ", err));
