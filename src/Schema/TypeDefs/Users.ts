import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    Nombre: { type: GraphQLString },
    Segundo_Nombre: { type: GraphQLString },
    Apellido_Paterno: { type: GraphQLString },
    Apellido_Materno: { type: GraphQLString },
    Fecha_Nacimiento: { type: GraphQLString },
    Email: { type: GraphQLString },
    Telefono: { type: GraphQLString },
  }),
});