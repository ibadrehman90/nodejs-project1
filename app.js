const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parsing form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())
// importing the people router
app.use('/api/people',people)
// importing the auth router
app.use('/login', auth)

app.listen(5000, () => {
    console.log(`Server started on port`);
});