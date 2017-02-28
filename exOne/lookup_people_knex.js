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


knex.select("id","first_name").from("famous_people").where({'last_name':'Lincoln'}).asCallback(function(err, values) {
  if(err) {
    console.log(err);
  } else {
    console.log(values);
  }
  //knex.destroy();
});