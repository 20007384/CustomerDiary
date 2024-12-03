const connection=require('../database/database.js');


const  list = (req, res) => {
    console.log("work")
        connection.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }

            res.render('index.ejs', {
                data: customers
            });
        });

};

module.exports={list};