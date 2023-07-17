import React, { createContext, useEffect, useReducer } from 'react'


export const contextoCarrito = createContext()

const estadoInicial = {
    carrito: [],
    precioTotal: 0
};

const CarritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const nuevoProducto = action.payload;

      const existeProducto = state.carrito.find((item) => item.compra_producto === nuevoProducto.compra_producto);

      const productosCarrito = existeProducto
        ? state.carrito.map((item) => (item.compra_producto === existeProducto.compra_producto ? nuevoProducto : item))
        : [...state.carrito, nuevoProducto];

      const precioTotalAgregar = productosCarrito.reduce((total, producto) => total + producto.compra_precio * producto.compra_cantidad, 0);

      return { ...state, carrito: productosCarrito, precioTotal: precioTotalAgregar };

    case 'LIMPIAR_CARRITO':
      return { ...state, carrito: [], precioTotal: 0 };

    case 'ELIMINAR_PRODUCTO':
      const productoEliminarId = action.payload;
      const nuevoEstado = state.carrito.filter((producto) => producto.compra_producto !== productoEliminarId);

      const precioTotalEliminar = nuevoEstado.reduce((total, producto) => total + producto.compra_precio * producto.compra_cantidad, 0);

      return { ...state, carrito: nuevoEstado, precioTotal: precioTotalEliminar };

    case 'INCREMENTAR_CANTIDAD':
      const id = action.payload;
      const productoEnCarritoId = state.carrito.findIndex((producto) => producto.compra_producto === id);
      const nuevoCarrito = [...state.carrito];

      if (productoEnCarritoId !== -1) {
        nuevoCarrito[productoEnCarritoId].compra_cantidad++;
      }

      const precioTotalIncrementar = nuevoCarrito.reduce((total, producto) => total + producto.compra_precio * producto.compra_cantidad, 0);

      return { ...state, carrito: nuevoCarrito, precioTotal: precioTotalIncrementar };

    case 'DECREMENTAR_CANTIDAD':
      const id1 = action.payload;
      const productoEnCarritoId1 = state.carrito.findIndex((producto) => producto.compra_producto === id1);
      const nuevoCarrito1 = [...state.carrito];

      if (productoEnCarritoId1 !== -1 && nuevoCarrito1[productoEnCarritoId1].compra_cantidad > 1) {
        nuevoCarrito1[productoEnCarritoId1].compra_cantidad -= 1;
      }

      const precioTotalDecrementar = nuevoCarrito1.reduce((total, producto) => total + producto.compra_precio * producto.compra_cantidad, 0);

      return { ...state, carrito: nuevoCarrito1, precioTotal: precioTotalDecrementar };

    case 'SET_CARRITO':
      const precioTotalSet = action.payload.reduce((total, producto) => total + producto.compra_precio * producto.compra_cantidad, 0);

      return {
        ...state,
        carrito: action.payload,
        precioTotal: precioTotalSet,
      };

    default:
      return state;
  }
};



const CarritoProvider = ({children}) => {

    const [state,dispatch] = useReducer(CarritoReducer,estadoInicial)
    
    useEffect(() => {
      const carritoStorage = localStorage.getItem('carrito');
      if (carritoStorage) {
        const carrito = JSON.parse(carritoStorage);
        const precioTotalSet = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        dispatch({ type: 'SET_CARRITO', payload: carrito, precioTotal: precioTotalSet });
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(state.carrito));
    }, [state.carrito]);
    
    useEffect(() => {
      localStorage.setItem('precioTotal', JSON.stringify(state.precioTotal));
    }, [state.precioTotal]);

    const agregarProducto = (productoCarrito,compra_cantidad) => {
        dispatch({ type: 'AGREGAR_PRODUCTO', payload: {...productoCarrito,compra_cantidad}})
    }

    const limpiarCarrito = () => {
        dispatch({type: 'LIMPIAR_CARRITO', payload: {} })
    }

    const eliminarProducto = (id) => {
        dispatch({type: 'ELIMINAR_PRODUCTO' , payload: id})
    }
    const incrementarCantidad = (id) => {
        dispatch({type: 'INCREMENTAR_CANTIDAD' , payload: id})
    }
    const decrementarCantidad = (id) => {
        dispatch({type: 'DECREMENTAR_CANTIDAD' , payload: id})
    }
    const obtenerPrecioTotal = () => {
      return state.precioTotal
    }

  return (
    <contextoCarrito.Provider
        value={{
            carrito: state.carrito, 
            agregarProducto,
            limpiarCarrito,
            eliminarProducto,
            incrementarCantidad,
            decrementarCantidad,
            obtenerPrecioTotal,

        }}
    >
    {children}
    </contextoCarrito.Provider>
  )
}

export default CarritoProvider
