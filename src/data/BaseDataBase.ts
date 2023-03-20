import knex from "knex";

import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase{    
   protected static connection=knex({
      client: 'sqlite3', // or 'better-sqlite3'
      connection: {
        filename: String(process.env.SQLITE_FILENAME)
      },
      useNullAsDefault:true
    })
   
}