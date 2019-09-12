import Knex from "knex";
import * as database from "../../database";

const knex = Knex(database);
knex.migrate.latest().then(() => {
    // knex.seed.run().then(() => console.log('BD updated'));
});



export default knex;