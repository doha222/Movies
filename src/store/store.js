import { createStore } from "redux";
import languagereducer from "./reducer";

const store=createStore(languagereducer)
export default store;