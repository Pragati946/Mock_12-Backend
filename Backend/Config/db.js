const mongoose = require("mongoose");
function connect(){
    return mongoose.connect(`mongodb+srv://p:t@cluster0.mndmrhq.mongodb.net/calculator`);
}
module.exports = connect;

