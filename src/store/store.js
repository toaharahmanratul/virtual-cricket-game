import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';  // Use session storage
import gameReducer from '@/components/game/GameSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

const store = configureStore({
  reducer: {
    game: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
