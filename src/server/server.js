const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/getcarInfo', (req, res) => {
    db.query("select * from used_car;", (err, data) => {
        if(!err) res.send({ car_res: data });
        else res.send(err);
    })
})

app.delete('/api/del_carInfo/:name', (req, res) => {
    var query = "delete from used_car where car_name="+"'"+req.params.name+"'";  
    db.query(query, (err, data) => {
        if(!err) res.send({ car_res: data });
        else res.send(err);
    })
})

app.put('/api/basic_update_carInfo', (req, res) => {
    var query = "update used_car set color='흰색' where car_name='그랜저'";  
    db.query(query, (err, data) => {
        if(!err) res.send({ car_res: data });
        else res.send(err);
    })
})

app.put('/api/update_carInfo/:name&:color&:accident&:provider&:produce_date&:receiving_date&:price&:displacement&:distance_driven&:fuel&:transmission', (req, res) => {
    var query ="update used_car set color="+"'"+req.params.color+"'";
    query+= ",accident="+"'"+req.params.accident+"'";
    query+= ",provider="+"'"+req.params.provider+"'";
    query+= ",produce_date="+"'"+req.params.produce_date+"'";
    query+= ",receiving_date="+"'"+req.params.receiving_date+"'";
    query+= ",price="+"'"+req.params.price+"'";
    query+= ",displacement="+"'"+req.params.displacement+"'";
    query+= ",distance_driven="+"'"+req.params.distance_driven+"'";
    query+= ",fuel="+"'"+req.params.fuel+"'";
    query+= ",transmission="+"'"+req.params.transmission+"'";
    query+= " where car_name="+"'"+req.params.name+"'";
    db.query(query, (err, data) => {
        if(!err) res.send({ car_res: data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

