import {createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  products: [],
  selectedProduct: {},
};



export const getAllProducts=createAsyncThunk("getAllProduct",async()=>{
   const res= await axios.get("http://localhost:3000/products")
   return res.data

})

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
        state.products = action.payload;
        
    })

  }
});

export const { } = productSlice.actions

export default productSlice.reducer