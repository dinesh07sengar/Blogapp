import { combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import{Blogreducer} from "./reducer"

const store = createStore(Blogreducer,applyMiddleware(thunk))
export {store};