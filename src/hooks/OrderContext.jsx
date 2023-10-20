import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const OrderContext = React.createContext([{}, ()=>{}])

const OrderProvider = (props) => {
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)

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
    const editProduct = () => {

    }

    return (
        <OrderContext.Provider value={{order,addProduct,deleteProduct,checkAlreadyExist}}>
            {props.children}
        </OrderContext.Provider>
    )      
}

export {OrderContext, OrderProvider}