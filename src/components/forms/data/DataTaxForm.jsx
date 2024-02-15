import { TextField } from '@mui/material'
import React, { useState } from 'react'

const DataTaxForm = () => {

  const data = {
    type: "CUIT",
    ide: "-123-4",
    condition: "MONOTRIBUTO",
    income: "00",
    agreement: "CONVENIO LOCAL",
    iibb: "0.00%"
  }

  const [type, setType] = useState(data.type)
  const [ide, setIde] = useState(data.ide)
  const [condition, setCondition] = useState(data.condition)
  const [income, setIncome] = useState(data.income)
  const [agreement, setAgreement] = useState(data.agreement)
  const [iibb, setIibb] = useState(data.iibb)
  
  return (
    <form className='w-full'>
        <div className='flex flex-wrap w-full gap-4 items-center justify-center'>
        <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="type" 
                    label="Tipo de Identificador Fiscal" 
                    variant="outlined" 
                    value={data.type}
                    disabled
                />
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="ide" 
                    label="Identificador Fiscal" 
                    variant="outlined"
                    value={data.ide} 
                    disabled
                />
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="condition" 
                    label="Condición frente al IVA" 
                    variant="outlined"
                    value={data.condition} 
                    disabled
                />
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="ide" 
                    label="Tipo de Convenio" 
                    variant="outlined"
                    value={data.agreement} 
                    disabled
                />
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="income" 
                    label="Ingresos Brutos" 
                    variant="outlined"
                    value={data.income} 
                    disabled
                />
            </div>
            <div className='min-w-[190px] w-[235px] max-2-[400px]'>
                <TextField
                    fullWidth 
                    id="iibb" 
                    label="Alícuota de Percepción de IIBB" 
                    variant="outlined"
                    value={data.iibb} 
                    disabled
                />
            </div>
        </div>
     
    </form>
  )
}

export default DataTaxForm