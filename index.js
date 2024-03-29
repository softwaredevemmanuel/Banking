const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')})
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')
const profileRoute = require('./routes/profile')
const accountRoute = require('./routes/account')
const transactionRoute = require('./routes/transaction')
const cors = require('cors');


const app = express()

connectDB();

app.use( express.json({ extended: false }))

//cors
app.use(cors())

app.use(authRoute)
app.use(profileRoute)
app.use(accountRoute)
app.use(transactionRoute)


// app.use(express.static("public"));
// app.get('', function(req, res){
//     res.sendFile(path.join(__dirname + 'frontend/build/index.html'));
// });

app.use(express.static('frontend/build'))
app.get('', function(req, res){
    res.sendFile(path.join('frontend/build/index.html'));
 });


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on my port  ${PORT}`))