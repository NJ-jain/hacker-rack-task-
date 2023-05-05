const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
      .connect(
        "mongodb://localhost:27017/sayamhk",{ useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("connected!"))
    .catch((err) => console.log(err.message));
