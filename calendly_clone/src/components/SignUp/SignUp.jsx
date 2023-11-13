import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper';
import { Alert, TextField, Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required'),
});

const SignUp = ( { setVisibility } ) => {
  const [alertMessage, setAlertMessage] = useState('');

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      password: '',
    }, 
    validationSchema: validationSchema,
    onSubmit: () => {
      const { name, email, password } = formik.values;
      const users = JSON.parse(localStorage.getItem('users')) || [];

      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
      };
      
      const foundUser = users.find(user => user.email === email);

      if (!foundUser) {
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        formik.resetForm();
      } else {
        setAlertMessage('User already exist. Please sign in.')
      }
      
    }
  })

  return(
    <>
      <Paper sx={{ maxWidth: 350, marginLeft: 'auto', marginRight: 'auto', padding: '20px'}} elevation={3}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Sign Up</h2>

          <div>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>

          <div>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          <div>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          { alertMessage && (
            <>
              <Alert severity="error">{alertMessage}</Alert>
            </>
          )}

          <div>
            <Button 
              fullWidth
              variant="contained" 
              color="primary" 
              type="submit"
              size="large"
            >
              Sign Up
            </Button>
          </div>

          <div>
           <Button variant="text" onClick={setVisibility}>Sign In</Button>
          </div>

        </form>
      </Paper>
    </>
  )
}

export default SignUp;