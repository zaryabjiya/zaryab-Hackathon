"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Iproduct from '@/app/items/types'
import Products from '@/app/items/api'

// Define the initial state using that type
const initialState: Iproduct[] = Products;

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

export const {  } = ProductSlice.actions
export default ProductSlice.reducer