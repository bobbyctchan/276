const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT;

// template views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index', { title: "My App" }))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


