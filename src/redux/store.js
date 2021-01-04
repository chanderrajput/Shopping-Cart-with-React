import { createStore } from 'redux';
import { updateGenral } from "./reducers/updateGenral";

export const store = createStore(updateGenral)