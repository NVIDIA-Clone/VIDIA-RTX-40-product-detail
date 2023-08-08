import { configureStore } from '@reduxjs/toolkit'

//even though the file might be named productSlice.js, it is common to refer to the generated reducer function as the "product reducer" because it is the reducer that manages the state for the product slice of your application's store.
import productReducer from './slice'

export default configureStore({
  reducer: {
    product: productReducer
  },
})