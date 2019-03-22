const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jehielmartinez:WJqBVU4yg29aECx@ds121406.mlab.com:21406/oversight');

module.exports = {
    mongoose
};
