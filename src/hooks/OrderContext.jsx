import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const OrderContext = React.createContext([{}, ()=>{}])

const OrderProvider = (props) => {
    const [order, setOrder] = useState([])
    const [orders, setOrders] = useState([{}])
    const [loading, setLoading] = useState(true)

    const getOrders = async () => {
        setLoading(true)  
        try {
            const data = [
                {
                  numero: "001",
                  fecha: "2023-01-01",
                  artículos: "1",
                  moneda: "USD",
                  subtotal: 100.00,
                  total: 120.00,
                  fechaFactura: "2023-01-02",
                  domicilio: "Calle 123, Ciudad",
                  estado: "En proceso",
                },
                {
                    numero: "001",
                    fecha: "2023-01-01",
                    artículos: "2",
                    moneda: "ARS",
                    subtotal: 100.00,
                    total: 120.00,
                    fechaFactura: "2023-01-02",
                    domicilio: "Calle 123, Ciudad",
                    estado: "Cancelado",
                  },
                  {
                    numero: "001",
                    fecha: "2023-01-01",
                    artículos: "1",
                    moneda: "USD",
                    subtotal: 100.00,
                    total: 120.00,
                    fechaFactura: "2023-01-02",
                    domicilio: "Calle 123, Ciudad",
                    estado: "En proceso",
                  },
              ];
            setOrder(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        } 
        setLoading(false)  
    }

    const deleteOrder = () => {
        setOrder([])
    }
    const editOrder = (product) => {
        
    }
    const checkAlreadyExist = (code) => {
        let flag = false
        order.forEach(product => {
            if(product.code == code){
                flag = true
            }
        })

        return flag
    }
    const addProduct = (product) => {
        try {
            const updatedOrder = [...order];
            updatedOrder.push(product)
            setOrder(updatedOrder);
            toast.success("Producto agregado correctamente!")
        } catch (error) {
            console.log(error);
        }  
    }
    const deleteProduct = (code) => {
        try {
            const updatedOrder = order.filter((product) => product.code !== code);
            setOrder(updatedOrder);
            toast.success("Producto eliminado correctamente!")
        } catch (error) {
            console.log(error);
        }
    }
    const deleteProducts = () => {
        setOrder([])
        toast.success("Productos eliminados correctamente!")
    }
    const editProduct = () => {

    }

    return (
        <OrderContext.Provider value={{order,addProduct,deleteProduct,checkAlreadyExist,orders,getOrders,deleteProducts}}>
            {props.children}
        </OrderContext.Provider>
    )      
}

export {OrderContext, OrderProvider}