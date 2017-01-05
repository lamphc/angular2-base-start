/**
 * Created by lamph on 2017/1/5.
 */
module.exports = function (app) {
    //设置跨域访问
    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
        res.header("X-Powered-By", ' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    var path = require('path');
    var fs = require('fs');
    var jsonPath = path.resolve(__dirname, '../DB2/hero.json');

    app.get('/hero/list', function (req, res) {
        fs.readFile(jsonPath, 'utf-8', function (err, data) {
            if (!err) {
                var jsonObj = JSON.parse(data);
                res.send(jsonObj)
            }
        });
    })

    app.post('/hero/create', function (req, res) {
        fs.readFile(jsonPath, 'utf-8', function (err, data) {
            if (!err) {
                var jsonObj = JSON.parse(data);
                jsonObj.data.forEach(function (item) {
                    if ((this.length - 1) == item.id) {
                        req.body.id = item.id + 1;
                        this.push(req.body);
                        fs.writeFile(jsonPath, JSON.stringify(jsonObj), function (err, data) {
                            if (!err) {
                                res.send(req.body);
                            }
                        })
                    }
                }, jsonObj.data)
            }
        });

    })

    app.put('/hero/update/:id', function (req, res) {
        var id = req.params.id;
        fs.readFile(jsonPath, 'utf-8', function (err, data) {
            if (!err) {
                var jsonObj = JSON.parse(data);
                jsonObj.data.forEach(function (item) {
                    if (id == item.id) {
                        Object.assign(item, req.body);
                        fs.writeFile(jsonPath, JSON.stringify(jsonObj), function (err, data) {
                            if (!err) {
                                res.send({data: req.body});
                            }
                        })
                    }
                }, jsonObj.data)
            }
        });
    })

    app.get('/hero/search', function (req, res) {
        var name = req.query.name;
        console.log(name)
        if(!!name) {
            fs.readFile(jsonPath, 'utf-8', function (err, data) {
                if (!err) {
                    var jsonObj = JSON.parse(data);
                    jsonObj.data = jsonObj.data.filter(function (item) {
                        return item.name.toLowerCase().search(name.toLowerCase()) > -1;
                    })
                    res.send(jsonObj);
                }
            });
        }

    })


    app.delete('/hero/delete/:id', function (req, res) {
        var id = req.params.id;
        fs.readFile(jsonPath, 'utf-8', function (err, data) {
            if (!err) {
                var jsonObj = JSON.parse(data);
                jsonObj.data = jsonObj.data.filter(function (item) {
                    return item.id != id;
                })

                fs.writeFile(jsonPath, JSON.stringify(jsonObj), function (err, data) {
                    if (!err) {
                        res.send({data: 'deleted'});
                    }
                })
            }
        });
    })
}
