import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import mainReducer from "./mainReducer/main.reducer";

export const store = createStore(mainReducer);

export const persistor = persistStore(store);

export default { store, persistStore };
