import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Pedidos = createSlice({
  name: "Pedidos",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      console.log("ADD ITEM");
      console.log(action.payload);
      state.push(action.payload);
    },
    DeleteItem: (state, action) => {
      console.log("delete ITEM");
    },
    EnviarPedido: (state, action) => {
      console.log("pediddo guardado");
    },
    ChangeCantidadStore: (state, action) => {
      console.log(action.payload);
      const findidProduct = state.find((item) => item.id === action.payload.id);
      findidProduct.cantidad = action.payload.cantidad;
    },
  },
});

export const { AddItem, DeleteItem, EnviarPedido, ChangeCantidadStore } =
  Pedidos.actions;
export const StorePedidos = configureStore({
  reducer: {
    Pedido: Pedidos.reducer,
  },
});
