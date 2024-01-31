import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import "@/styles/globals.css";
import "@/components/game/select-teams/styles/select-teams.module.css";
import "@/components/game/simulate-match/styles/simulate-match.module.css";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
