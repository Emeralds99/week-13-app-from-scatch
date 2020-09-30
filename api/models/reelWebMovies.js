/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reelWebMovies', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		director: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		release_year: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		selected: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: true
		},
		imgsrc: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		alt: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'reel_web_movies',
		timestamps: false
	});
};
