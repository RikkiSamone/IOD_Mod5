const express = require('express')
const app = express()
const port = [3000, 4001];

app.get('/', (req, res) => {
res.send('Hello World!')
})

port.forEach(port => {
    app.listen(port, () => {
        console.log(`Example app listening
at http://localhost:${port}`);
    });
});