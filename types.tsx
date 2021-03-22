export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
};

export type TweetType = {
  id: string,
  user : UserType,
  createdAt: string,
  content: string,
  image?: string,
  likesCount?: number,
  commentsCount?: number,
  retweetsCount?: number,
}
