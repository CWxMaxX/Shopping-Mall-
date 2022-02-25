import AccountPage from "./screens/AccountPage";

import HelpPage from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import PopModal from "./components/PopModal";
import NavigationStack from "./navigation/NavigationStack";
import CreateAccountPAge from "./screens/CreateAccountPAge";

export default function App() {
  return (
    // <NavigationStack />
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="AccountPage" component={AccountPage} />
    //     <Tab.Screen name="CreateAccountPage" component={CreateAccountPage} />
    //     <Tab.Screen name="HelpPAge" component={HelpPage} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <LoginPage />
    // <AccountPage />
    <CreateAccountPAge />
    // <HelpPage />
    // <Home />
    // <NavigationStack></NavigationStack>
  );
}
