import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
    'products', 
    async (dataURL) => {
      try {
        const response = await fetch(dataURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data[0];
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
);

export const fetchSpecsData = createAsyncThunk(
    'specs/fetchData',
    async (dataURL) => {
        const response = await fetch(dataURL);
        const data = await response.json();
        return data[0]
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: {}
        //specs
    },
    reducers: {
        // setProductData(state, action) {
        //     state.data = action.payload;
        // }
        //specs
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsData.fulfilled, (state, action) => {
                state.data.products = action.payload
            })
            .addCase(fetchSpecsData.fulfilled, (state, action) => {
                state.data.specs = action.payload
            });
    }
});

export const { setProductData } = productSlice.actions;

export default productSlice.reducer;