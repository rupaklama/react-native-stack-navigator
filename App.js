import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SearchScreen } from './src/screens/SearchScreen';
import { ResultsShowScreen } from './src/screens/ResultsShowScreen';

// creating Stack navigator object to create routes
const navigator = createStackNavigator(
  {
    // when using Stack navigator, at least need to have one screen
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  // as second arg, passing another object
  {
    // default route to show anytime app starts up
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      // to customize header in every different screens
      // default title for header 
      title: 'Business Search'
    }
  }
);

// createAppContainer func creates default component & 
// displays all components inside of navigator object
export default createAppContainer(navigator);