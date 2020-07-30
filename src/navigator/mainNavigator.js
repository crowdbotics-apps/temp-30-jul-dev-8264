import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen29536Navigator from '../features/CopyOfBlankScreen29536/navigator';
import BlankScreen29535Navigator from '../features/BlankScreen29535/navigator';
import BlankScreen19534Navigator from '../features/BlankScreen19534/navigator';
import BlankScreen39533Navigator from '../features/BlankScreen39533/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen29536: { screen: CopyOfBlankScreen29536Navigator },
BlankScreen29535: { screen: BlankScreen29535Navigator },
BlankScreen19534: { screen: BlankScreen19534Navigator },
BlankScreen39533: { screen: BlankScreen39533Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
