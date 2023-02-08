const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true, useUnifiedTopology: true
} ,() => {
    console.log('Connected to mongo DB');
    initialize();
});

// mongoose.connect(process.env.MONGO_URL);
// const db = mongoose.connection;/

// db.on("error", () => console.log("Can't connect to DB"));

// db.once("open", () => {
// console.log("Connected to mongoDB");
 
// }

// )

//middlewares

function initialize(){
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute)


app.listen(8080, () => {
    console.log('Backend server is running on port 8080');
})
}