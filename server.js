const express = require('express');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));





function view()
db.query('SELECT * FROM DEPARTMENT', (err, results) => {
    console.log(results);
})







sequelize.sync().then(() => {
app.listen(PORT, () => console.log(`The app is now running on ${PORT}`))
});
