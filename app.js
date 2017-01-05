/**
 * Created by lamph on 2017/1/4.
 */
'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true

}))

const port = 8600;

app.listen(port, () => {
    console.info(`meng started on port:${port}`)
})

require('./service/api/routes')(app);