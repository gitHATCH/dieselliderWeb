import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ClientContext = React.createContext([{}, ()=>{}])

const ClientProvider = (props) => {
    const [client, setClient] = useState(
        {
            businessName: "srl",
            contact: "124124",
            postalCode: "500",
            country: "Argentina",
            province: "Córdoba",
            location: "Córdoba",
            tel1: "141241",
            tel2: "124124",
            tel3: "",
            cel: "124141",
            fax: "",
        }
    )
  
    const editClient = async(client) => {
        try {
            setClient(client);
            toast.success("Cliente editado correctamente")
        } catch (error) {
            console.error("No se pudo editar el cliente");
        }   
    }
    
    return (
        <ClientContext.Provider value={[client,setClient,editClient]}>
            {props.children}
        </ClientContext.Provider>
    )      
}

export {ClientContext, ClientProvider}