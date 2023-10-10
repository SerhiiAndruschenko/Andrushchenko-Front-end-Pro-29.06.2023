import './App.css';
import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
import { Alert, TextField, Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('This field is required'),
  phone: Yup.string()
    .matches(/^\d{12}$/, 'Phone number must contain 12 digits')
    .required('This field is required'),
});

function App() {
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      phone: ''
    }, 
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.resetForm();
      setMessage('Your message was sent successfully!')
    }
  })

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
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
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </div>
        <Button 
          fullWidth
          variant="contained" 
          color="primary" 
          type="submit"
          size="large"
          endIcon={<SendIcon />}
        >
          Send
        </Button>

      </form>

      {message && (
        <>
          <Alert severity="success">{message}</Alert>
        </>
      )}

    </div>
  );
}

export default App;
