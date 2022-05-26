/*export const Rutas = { DESARROLLO
  CLIENTE_ID: "//localhost:4000/api/v1/cliente/get-cliente-id/",
  NEW_RESERVA: "//localhost:4000/api/v1/reserva/new-reserva/",
  GET_RESERVA: "//localhost:4000/api/v1/reserva/get-reserva/",
  GET_CLIENTES: "//localhost:4000/api/v1/cliente/get-cliente/",
  NEW_PRODUCT: "//localhost:4000/api/v1/product/new-product/",
  GET_PRODUCT: "//localhost:4000/api/v1/product/get-products/",
  POST_PEDIDOS: "//localhost:4000/api/v1/pedido/new-pedido/",
  GET_PEDIDOS: "//localhost:4000/api/v1/pedido/get-pedido/",
  PUT_PEDIDOS: "//localhost:4000/api/v1/pedido/complete-pedido/",
};*/

export const Rutas = {
  CLIENTE_ID:
    "https://apigransarten.herokuapp.com/api/v1/cliente/get-cliente-id/",
  NEW_RESERVA:
    "https://apigransarten.herokuapp.com/api/v1/reserva/new-reserva/",
  GET_RESERVA:
    "https://apigransarten.herokuapp.com/api/v1/reserva/get-reserva/",
  GET_CLIENTES:
    "https://apigransarten.herokuapp.com/api/v1/cliente/get-cliente/",
  NEW_PRODUCT:
    "https://apigransarten.herokuapp.com/api/v1/product/new-product/",
  GET_PRODUCT:
    "https://apigransarten.herokuapp.com/api/v1/product/get-products/",
  POST_PEDIDOS: "https://apigransarten.herokuapp.com/api/v1/pedido/new-pedido/",
  GET_PEDIDOS: "https://apigransarten.herokuapp.com/api/v1/pedido/get-pedido/",
  PUT_PEDIDOS:
    "https://apigransarten.herokuapp.com/api/v1/pedido/complete-pedido/",
};

export const Fetcher = (...args) => fetch(...args).then((res) => res.json());
