const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! for Solution'))

app.listen(port, () => console.log(`SOLUTION Example app listening on port ${port}!`))
