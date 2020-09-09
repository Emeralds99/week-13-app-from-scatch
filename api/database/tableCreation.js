const { sequelize } = require ('./sequelize-common');

(async () => {

    await sequelize.query(`
        CREATE TABLE
        IF NOT EXISTS reel_web_movies (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(100) NOT NULL,
            director VARCHAR(100) NOT NULL,
            release_year INT NOT NULL,
            date_created DATETIME NULL,
            PRIMARY KEY (id)
        )
    `);

    const [results, metadata] = await sequelize.query(`
        SHOW TABLES
    `);

    console.log({results, metadata});

})().catch(error => {
    console.log({error});
});