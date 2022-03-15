const express = require('express');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3306;


app.use(express.json());
app.use(express.urlencoded({extended: true}));





function update()
sequelize.query('SELECT * FROM DEPARTMENT', (err, results) => {
    console.log(resutls);
})







sequelize.sync().then(() => {
app.listen(PORT, () => console.log(`The app is now running on ${PORT}`))
});
