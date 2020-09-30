const { autoGenerate } = require('./sequelize-automation');

autoGenerate.run(function (err) {
    if (err) throw err;

    console.log(autoGenerate.tables); // table list
    console.log(autoGenerate.foreignKeys); // foreign key list
});