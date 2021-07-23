
var mongoose = require('mongoose');

const MONGOURI = 'mongodb+srv://saumya:ss%40123456@cluster0.4iave.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        }).then(res => console.log("Connected to DB"));
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer