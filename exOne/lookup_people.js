const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }


  //console.log(userInput);
  const some = "hello";

  client.query("SELECT * FROM famous_people WHERE last_name = $1::text",getInput(), meCool(some));
function getInput(){

  let userInput = process.argv.slice(2);

return userInput ;

}



// function printInput(err,table) {

//   if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(table.rows); //output: 1
//     client.end();
// }

function meCool(something) {
  return function(err, res) {
    console.log('something', something);
    console.log('res', res.rows)
  }
}



});

