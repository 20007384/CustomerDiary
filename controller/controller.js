const connection=require('../database/database.js');


const  list = (req, res) => {
   
        connection.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('index.ejs', {
                data: customers
            });
        });

};

const edit = (req, res) => {
    const { id } = req.params;

        connection.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            
            res.render('customer_edit', {
                data: customer[0]
            });
        });
};


const save = (req, res) => {
    const data = req.body;
        connection.query('INSERT INTO customer set ?', [data], (err, customer) => {
            if (err) {
                res.json(err);
            }

            res.redirect('/');
        });
 
};


module.exports={list,edit,save};