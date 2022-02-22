const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // id, name, 
  sequelize.define('Recipe', {
    id :{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sumary:{
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      allowNull: true 
    }
  },
  {
    timestamps:false
  }
  );
};
