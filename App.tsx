import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/440px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg';
  }

  const saveUserToDB = async (user) => {
    console.log(user);
    await API.graphql(graphqlOperation(createUser, {input: user}))
  }

  useEffect( () => {
    const updateUser = async () => {
      // Get auth user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      
      if(userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        
        if(!userData.data.getUser) {

          const user = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            username: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user);
        } 
        else {
            console.log("User already exsist");
        }
      }
      // check user db
      // if not create new user
    }
    updateUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
