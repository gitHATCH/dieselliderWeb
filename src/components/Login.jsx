/* Pagina inicial */
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Logo from "../assets/images/DLCircle.png"
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../hooks/AuthContext';

export default function Login() {
  const {loginUser} = useContext(AuthContext);
  const [typeId, setTypeId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeType = (event) => {
    setTypeId(event.target.value);
  };
  const handleChangeId = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(typeId,userId,password);
    if(typeId === "" || userId  === "" || password  === ""){
      toast.error("Todos los campos son obligatorios")
      return
    }
    if(userId.length < 3 || password.length < 3){
      toast.error("El mínimo permitido es de 3 caracteres")
      return
    }
    loginUser(typeId, userId, password)
    
  };

 

  return (
    <>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='md:p-5 2xl:p-12 rounded-2xl w-1/3 formLogin 2xl:bg-slate-100 shadow-xl shadow-black'>
          <div className='flex justify-center'>
            <div className='2xl:hidden'>
              <Image
                src={Logo}
                width={100}
                height={100}
                alt='Diesel Lider Logo'
              />
            </div>
            {/* 2xl Resolution */}
            <div className='hidden 2xl:block'>
              <Image
                src={Logo}
                width={200}
                height={200}
                alt='Diesel Lider Logo'
              />
            </div>
            
          </div>  
          <h1 className='text-center md:text-3xl 2xl:text-6xl md:font-semibold tracking-widest md:mt-5 2xl:mt-10'>Iniciar Sesión</h1>
          <form className='md:mt-5 2xl:mt-20' onSubmit={handleSubmit}>
            <Box sx={{ minWidth: 120}}>
              <div className='formInput'>
                <FormControl fullWidth>
                  <InputLabel id="identificacion">Tipo de Identificación</InputLabel>
                  <Select
                    labelId="identificacion"
                    label="Tipo de Identificación"
                    value={typeId}
                    onChange={handleChangeType} 
                  >
                    <MenuItem value={"C.U.I.T."}>C.U.I.T.</MenuItem>
                    <MenuItem value={"C.N.P.J."}>C.N.P.J.</MenuItem>
                    <MenuItem value={"R.F.C."}>R.F.C.</MenuItem>
                    <MenuItem value={"R.U.T."}>R.U.T.</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              <div className='mt-5 formInput'>
                <TextField 
                  fullWidth 
                  id="identificacionTributaria" 
                  label="Identificación Tributaria" 
                  variant="outlined" 
                  onChange={handleChangeId}
                />
              </div>

              <div className='mt-5 formInput'>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangePassword}
                    endAdornment={
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          style={{marginRight:"2px"}}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    }
                    label="Contraseña"
                    
                  />
                </FormControl>
              </div>
              <div className='flex 2xl:mt-2'>
                <p className='forgot text-md 2xl:text-lg font-medium opacity-80'>Olvidé mi contraseña</p>
              </div>
            
            </Box>
           
              <Button 
                fullWidth 
                variant="contained" 
                style={{marginTop:40, backgroundColor:"#1c5560", display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                onClick={handleSubmit}
              >
                <div className='2xl:h-12 flex items-center '>           
                  <p className='text-xl 2xl:text-3xl font-semibold'>Iniciar Sesion</p>
                </div>
              </Button>
          
            
          </form>
        </div>
      </div>
    
    </>
  ) 
}

