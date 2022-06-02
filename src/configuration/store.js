import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../http/reducers/myReducer";

export default configureStore({
	reducer: myReducer
});
