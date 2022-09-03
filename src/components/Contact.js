import React from 'react'
import { TextField, Typography, Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            msg: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('This is required field'),
            lastName: Yup.string().required('This is required field'),
            phone: Yup.string().required('This is required field'),
            msg: Yup.string().required('This is required field'),
        }),
        onSubmit: (values) => {
            console.log('Form Values: ', values)
        }
    })

    return (
        <>
            <Typography variant='h3' my={6}>
                Contact Us
            </Typography>
            {/* component='form' means, treat as a form */}
            <Box component='form' textAlign='center'
                onSubmit={formik.handleSubmit}>
                <TextField label='First Name' type='text' varient='outlined' sx={{ width: '32%' }}
                    name='firstName' onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.firstName && formik.errors.firstName} />

                <TextField label='Last Name' type='text' varient='outlined' sx={{ width: '33%', mx: 2 }}
                    name='lastName' onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.lastName && formik.errors.lastName} />

                <TextField label='Phone Number' type='number' varient='outlined' sx={{ width: '32%' }}
                    name='phone' onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.phone && formik.errors.phone} />

                <TextField label='Message' type='text' varient='outlined' multiline rows={4} fullWidth sx={{ my: 2 }}
                    name='msg' onChange={formik.handleChange}
                    error={formik.touched.msg && Boolean(formik.errors.msg)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.msg && formik.errors.msg} />

                <Button size='large' variant='contained' type='submit' sx={{ my: 2, borderRadius: 2, width: '10rem' }}> Send </Button>
            </Box>
        </>
    )
}

export default Contact
