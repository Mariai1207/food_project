//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js'); // servidor
const { conn, Diet } = require('./src/db.js'); // instancia de sequelize

const dietsForDb= [  'gluten free', 'ketogenic', 'vegetarian' ,'lacto vegetarian', 'ovo vegetarian', 'vegan',  'pescetarian', 'paleo', 'primal', 'low FODMAP', 'whole30']
// Syncing all the models at once.
// con el force en true, si se cambia algo en el back, nodemon para y levanta el servidor de nuevo y se borran los datos
conn.sync({ force: true}).then(() => {
  server.listen(3001, () => { // levanta el servidor
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    dietsForDb.forEach(diet=>{
      Diet.create(  
        {name: diet}
      )
    })
    
  });
});
