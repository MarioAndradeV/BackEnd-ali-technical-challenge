import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/Users";
import { users_test_mario_andrade_velazquez } from "../../Entities/Users";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return users_test_mario_andrade_velazquez.find();
  },
};