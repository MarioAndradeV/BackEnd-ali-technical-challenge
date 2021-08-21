import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/Users";
import { users_test_mario_andrade_velazquez } from "../../Entities/Users";

export const CREATE_USER = {
  type: UserType,
  args: {
    Nombre: { type: GraphQLString },
    Segundo_Nombre: { type: GraphQLString },
    Apellido_Paterno: { type: GraphQLString },
    Apellido_Materno: { type: GraphQLString },
    Fecha_Nacimiento: { type: GraphQLString },
    Email: { type: GraphQLString },
    Telefono: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { Nombre, Segundo_Nombre, Apellido_Paterno, Apellido_Materno, Fecha_Nacimiento, Email, Telefono } = args;
    await users_test_mario_andrade_velazquez.insert(args);
    return args;
  },
};