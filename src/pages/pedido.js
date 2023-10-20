import React, { useContext } from 'react'
import AccountConditionCard from '../components/cards/AccountConditionCard'
import { OrderContext } from '../hooks/OrderContext'

const Pedido = () => {
  const {order} = useContext(OrderContext)
  return (
    <div className=''>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Estado de Cuenta</h1>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-4/5 h-40 bg-slate-300 rounded-xl mt-10 shadow-xl shadow-black'>
          <AccountConditionCard/>
        </div>
      </div>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Su Pedido Actual</h1>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-4/5 h-40 bg-slate-300 rounded-xl mt-10 shadow-xl shadow-black'>
          {
            //Tabla Productos
            /*
              Mostrar unidades, permitir editar unidades y sacar producto
              Codigo DL, Descr, 
              Marca,
              Precio Neto,
              Stock,
              Cantidad
              Btns -> Info y Eliminar
            */
            //Factura conf
            /*
              -Facturar el dia -> Calendario
              -Horario de envío -> CheckBox -> Preferiblemente a la mañana
              -Enviar pedido a -> Select -> Domicilios
              -Transporta: Input no editable
              -Paga transporte: Input no editable
            */
            //Total info
            /*
              Total en productos
              Otros impuestos
              Total del pedido 

             */
            //Confirmar pedido btn
            //Continuar comprando btn
            //Descartar pedido actual btn
            //Actualizar disponibilidad y precios del pedido btn label
          }
        </div>
      </div>
    </div>
  )
}

export default Pedido