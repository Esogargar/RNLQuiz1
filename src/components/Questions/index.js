import { createStackNavigator } from 'react-navigation-stack';
import One from './One';
import Two from './Two';
import Three from './Three';
import FinalResult from '../FinalResult'

const questionsNavigation = createStackNavigator(
  {
    One: {
      screen: One,
    },
    Two: {
      screen: Two,
    },
    Three: {
      screen: Three,
    },
    FinalResult: {
      screen: FinalResult,
    }
  },
  {
    headerMode: 'none',
  },
);

export default questionsNavigation;
