import React, { createContext, useEffect, useReducer } from 'react'


export const contextoCarrito = createContext()

const estadoInicial = {
    carrito: [],
};

const CarritoReducer = (state,action) => {
    switch (action.type) {
      case 'AGREGAR_PRODUCTO':
        const nuevoProducto = action.payload  
        //verificar si existe el producto en el estado del carrito
        const existeProducto = state.carrito.find(
          (item => item.id === nuevoProducto.id)
        )
        
        //una condicion para actualizar si existe el item o guardar si no existe
        //de lo contrario si no existe entonces guardamos el primero
        const productosCarrito = existeProducto ? state.carrito.map((item) => item.id === existeProducto.id ? nuevoProducto : item) : [...state.carrito, nuevoProducto]
  
        return {...state, carrito: productosCarrito}
      
      case 'LIMPIAR_CARRITO':
  
        return({...state,carrito : []})
      
      case 'ELIMINAR_PRODUCTO':
        const productoEliminarId = action.payload
        const nuevoEstado = state.carrito.filter((producto) => (
          producto.id !== productoEliminarId
        ))
  
        return {...state, carrito: nuevoEstado}
      
      case 'INCREMENTAR_CANTIDAD':
        const id = action.payload
        const productoEnCarritoId = state.carrito.findIndex(producto => producto.id === id)
        const nuevoCarrito = [...state.carrito]
        if(productoEnCarritoId !== -1){
          nuevoCarrito[productoEnCarritoId].cantidad++
        }
  
        return {...state,carrito: nuevoCarrito}
  
      case 'DECREMENTAR_CANTIDAD':
        
        const id1 = action.payload
        const productoEnCarritoId1 = state.carrito.findIndex(producto => producto.id === id1)
        const nuevoCarrito1 = [...state.carrito]
        if (productoEnCarritoId1 !== -1 && nuevoCarrito1[productoEnCarritoId1].cantidad > 1) {
          nuevoCarrito1[productoEnCarritoId1].cantidad -= 1
        }
        
        return { ...state, carrito: nuevoCarrito1 }
        
        
       
        case 'SET_CARRITO':
  
        return {
          ...state,
          carrito: action.payload
        };
        
      default:
        return state
    }
}


const CarritoProvider = ({children}) => {

    const [state,dispatch] = useReducer(CarritoReducer,estadoInicial)
    
    useEffect(() => {
        const carritoStorage = localStorage.getItem('carrito');
        if (carritoStorage) {
        dispatch({type: 'SET_CARRITO', payload: JSON.parse(carritoStorage)});
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(state.carrito));
    }, [state.carrito]);

    const agregarProducto = (productoCarrito,cantidad) => {
        dispatch({ type: 'AGREGAR_PRODUCTO', payload: {...productoCarrito,cantidad}})
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


  return (
    <contextoCarrito.Provider
        value={{
            carrito: state.carrito, 
            agregarProducto,
            limpiarCarrito,
            eliminarProducto,
            incrementarCantidad,
            decrementarCantidad,

        }}
    >
    {children}
    </contextoCarrito.Provider>
  )
}

export default CarritoProvider
