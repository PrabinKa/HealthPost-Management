import "react-native-gesture-handler";
import StackNavigation from "./src/navigation/StackNavigation";
import Authprovider from "./src/context/Authcontext";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Authprovider>
        <StackNavigation />
      </Authprovider>
    </Provider>
  );
}
