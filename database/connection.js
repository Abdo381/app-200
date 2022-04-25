
// const config = {
//     user :'',
//     password :'',
//     server:'localhost',
//     database:'',
//     options: {
//       encrypt: true, 
//       trustServerCertificate: true,
//     },
//   };
  
//  async () => {
//     try {
//       const pool = await new sql.connect(config);
//       return pool;
//     } catch (error) {
//       console.error(error);
//     }
//   };
var Connection = require('tedious').Connection;  
var config = {  
    server: '',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: '', //update me
            password: ''  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: '',  //update me
              trustServerCertificate: true,

    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
    console.log(err)
});


// connection.connect();
  
module.exports = config;
