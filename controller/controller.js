
const  list = (req, res) => {
    console.log("work")
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }

            res.render('index.ejs', {
                data: customers
            });
        });
    });
};

module.exports={list};