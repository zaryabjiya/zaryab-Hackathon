"use client"
import {createSlice} from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '../store'
import { cart } from "@/app/items/types"
import { act } from "react"

const initialState: cart[] = []

export const cartSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add(state,action){
            let uid = Math.floor(1000+Math.random()*9000)
            let obj = {...action.payload,uid}
            state.push(obj)
        },

        delItem(state,{payload}){
            return state.filter((val)=> val.uid !== payload)
        },
        addition(state,action){
            let obj =state.find(
                (val:any)=>
                val.id == action.payload.id && 
                val.color == action.payload.color &&
                val.size == action.payload.size
            );

            if(obj){
                ++obj.qty;
                let newState = state.filter((val)=> val.id !== obj.uid);
                state = [...newState,obj]
            }
        },

        subtraction(state,action){
            let obj =state.find(
                (val:any)=>
                val.id == action.payload.id && 
                val.color == action.payload.color &&
                val.size == action.payload.size
            );

            if(obj !== undefined){
                --obj.qty;
                let newState = state.filter((val)=> val.id !== obj.uid);
                state = [...newState,obj]
            }
        }
    }
})

export const {add, delItem, addition, subtraction} = cartSlice.actions
export default cartSlice.reducer
