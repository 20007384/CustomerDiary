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
    console.log('work',id);

        connection.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            
            res.render('customer_edit.ejs', {
                data: customer[0]
            });
        });
}

const deleteC = (req, res) => {
    const { id } = req.params;
    console.log('work',id);

        connection.query('DELETE FROM customer WHERE id = ?', id, (err, customers) => {
            if (err) {
                res.json(err);
            }
            
            res.redirect('/');
        });
};


const save = (req, res) => {
    const data =(req.body);
    console.log(data);
        // connection.query('INSERT INTO customer set ?', [data], (err, customer) => {
        //     if (err) {
        //         res.json(err);
        //     }

        //     res.redirect('/');
        // });
        res.json({"success":"false"})
 
};


module.exports={list,edit,save,deleteC};