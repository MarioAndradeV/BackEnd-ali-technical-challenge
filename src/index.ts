import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { users_test_mario_andrade_velazquez } from "./Entities/Users";

const main = async () => {
    await createConnection({
      type: "mysql",
      host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
      database: "testing_ali_fullstack",
      username: "testing",
      password: "Pruebas%ALI%2020",
      logging: true,
      synchronize: false,
      entities: [users_test_mario_andrade_velazquez],
    });
  
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );
  
    app.listen(3001, () => {
      console.log("SERVER RUNNING ON PORT 3001");
    });
  };
  
  main().catch((err) => {
    console.log(err);
  });