const settings = require("./settings");

var knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  },
  pool: { min: 0, max: 7 }
});

let userInput = process.argv.slice(2);
console.log(userInput)



let query = knex.insert({
  'first_name':userInput[0],
  'last_name':userInput[1]

}).into("famous_people")
.then(function (result) {
  return knex.select().from("famous_people");
})
.then(function (result) {
  console.log(result);
})
.catch(function (err) {
  if (err) console.log(err);
});



