import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../state-management/action/UsersAction';

export const EditInformation = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const local = JSON.parse(localStorage.getItem('user'))
    const user = useSelector(store=>store.userState)
    const a = user.filter(i=>i.mobileNo===local.mobileNo)
    const dispatch = useDispatch()
    console.log(a);
  return (
    <>
    {
      a.map((item)=>(
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

      <div>
        <TextField
          label="firstName"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.firstName}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="lastName"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.lastName}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="email"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.email}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="city"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.city}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="zipCode"
          type="number"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.zipCode}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="mobileNo"
          type="number"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          defaultValue={item.mobileNo}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            defaultValue={item.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">adress</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            defaultValue={item.adress}
          />
        </FormControl>
        <button class="btn btn-primary py-2 px-4 " type="submit" onClick={a=>dispatch(editUser(item.userId,))}>Change Saved</button>
      </div>
    </Box>
      ))
    }
    </>
    
    
  )
}
