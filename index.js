const express = require('express')

//Define app as function from express module
const app = express();

const port = 3000;
const options = {
    root: __dirname
}

//We define functions to use them when we recive a petition in the router
const getHTML = (req, res) => {
    res.sendFile('./index.html', options, (err) => {
        if (err) throw err;
        console.log('Serving index.html')
    })
}

//We define the routes
app.get('/', getHTML)

//We listen the port from Express
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})