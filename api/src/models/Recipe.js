const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
 
  sequelize.define('Recipe', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sumary:{
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    score:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    steps:{
      type: DataTypes.STRING(3000),
      allowNull: true 
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps:false
  }
  );
};
