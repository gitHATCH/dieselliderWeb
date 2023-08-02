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
    console.log(typeId,userId,password);
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
        <div className='p-10 rounded-2xl w-1/3 formLogin shadow-xl shadow-black'>
          <div className='flex justify-center'>
            <Image
              src={Logo}
              width={100}
              height={100}
              alt='Diesel Lider Logo'
            />
          </div>  
          <h1 className='text-center text-5xl font-semibold tracking-widest mt-10'>Iniciar Sesión</h1>
          <form className='mt-10' onSubmit={handleSubmit}>
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
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    }
                    label="Contraseña"
                  />
                </FormControl>
              </div>
            
            </Box>
            
            <Button 
              fullWidth 
              variant="contained" 
              style={{marginTop:40, height:50, backgroundColor:"#1c5560"}} 
              onClick={handleSubmit}
              >
                <p className='text-xl font-semibold'>Iniciar Sesión</p>
            </Button>
            
          </form>
        </div>
      </div>
    
    </>
  ) 
}

