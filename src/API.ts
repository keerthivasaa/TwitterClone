/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  username: string,
  email: string,
  image: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  username?: string,
  email?: string,
  image?: string,
  tweets?: ModelTweetConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items?:  Array<Tweet | null > | null,
  nextToken?: string | null,
};

export type Tweet = {
  __typename: "Tweet",
  id?: string,
  userID?: string,
  content?: string,
  image?: string,
  user?: User,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTweetInput = {
  id?: string | null,
  userID: string,
  content: string,
  image: string,
};

export type ModelTweetConditionInput = {
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTweetInput = {
  id: string,
  userID?: string | null,
  content?: string | null,
  image?: string | null,
};

export type DeleteTweetInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTweetMutationVariables = {
  input?: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input?: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input?: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id?: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items?:  Array< {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        username: string,
        email: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    email: string,
    image: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      email: string,
      image: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
