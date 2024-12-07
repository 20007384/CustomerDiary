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

const update = (req, res) => {
    const { id } = req.params;
    console.log('update',id);
    const data=req.body;
    console.log('update',data);
        connection.query('UPDATE customer set NAME=?, EMAIL=?, PHONE=?, ADDRESS=? WHERE ID =?', [data.name,data.email,data.phone,data.address,id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            
           return  res.json({"success":true});
        });
}


const deleteC = (req, res) => {
    const { id } = req.params;

        connection.query('DELETE FROM customer WHERE id = ?', id, (err, customers) => {
            if (err) {
                res.json(err);
            }
            
            res.redirect('/');
        });
};


const save = (req, res) => {
    const data =(req.body);
        connection.query('INSERT INTO customer set ?', [data], (err, customer) => {
            if (err) {
                return res.json({"success":"false"});
            }

            return res.json({"success":"true",customer:customer})
        });
      
};


const search = (req, res) => {
    const detail=req.params.id;
    
    connection.query('SELECT * FROM customer where NAME=? OR EMAIL=? OR ADDRESS=? OR PHONE=? ORDER BY NAME ASC',[detail,detail,detail,detail], (err, customers) => {
        if (err) {
            res.json(err);
        }
        
        res.render('index.ejs', {
            data: customers
        });
    });

    
};

module.exports={list,edit,save,deleteC,search,update};