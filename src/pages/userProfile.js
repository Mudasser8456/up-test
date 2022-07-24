import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid, Typography, useTheme, Box } from "@mui/material";

import CustomBtn from '../components/button';
import TextFieldWithName from '../components/textField';
import { getUser, updateUser } from '../features/userProfileApis';

const validationSchema = yup.object({
    firstName: yup
        .string('enter your firstName')
        .required('firstName is required'),
    lastName: yup
        .string('enter your lastName')
        .required('lastName is required'),
    phone: yup
        .number('enter your phone')
        .required('phone is required'),
});

function UserProfile() {
    const theme = useTheme();
    const [loading, setLoaing] = useState('');
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
    });
    const formik = useFormik({
        initialValues: data,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            setLoaing('update');
            await updateUser({
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
            });
            setLoaing('');

        },
    });



    const getData = async () => {
        const mount= true
        const res = await getUser();
        if(mount){

            setData({
                firstName: res.firstName,
                lastName: res.lastName,
                phone: res.phone,
            })
            
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <form onSubmit={formik.handleSubmit}>

                <Grid container>
                    <Grid item sm={12} lg={6}
                        sx={{
                            backgroundColor: theme.palette.tertiary.main,
                            minHeight: 319,
                            width: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Box
                            sx={{
                                height: 39,
                                borderBottomStyle: 'solid',
                                borderBottomWidth: 1,
                                borderBottomColor: theme.palette.primaryColor.main,
                                p: 2,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >

                            <Typography sx={{
                                fontWeight: theme.weight1.fontWeight,
                                fontSize: 20,
                            }}>
                                Account Settings
                            </Typography>
                        </Box>




                        <Box
                            sx={{ p: 2, pr: 3 }}
                        >

                            <TextFieldWithName
                                name={'firstName'}
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                helperText={formik.touched.firstName ? formik.errors.firstName : ""}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                type={'text'}
                                labeltext={'First Name'}
                            dataTestid={'profile-user-firstName'}
                            />
                            <TextFieldWithName
                                name={'lastName'}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                helperText={formik.touched.lastName ? formik.errors.lastName : ""}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                type={'text'}
                                labeltext={'Last Name'}
                                dataTestid={'profile-user-lastName'}
                            />

                            <TextFieldWithName
                                name={'phone'}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                helperText={formik.touched.phone ? formik.errors.phone : ""}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                type={'number'}
                                labeltext={'Phone'}
                                inputProps={{ min: 1 }}
                                dataTestid={'profile-user-phone'}
                            />
                        </Box>
                        <Box
                            sx={{
                                height: 39,
                                borderTopStyle: 'solid',
                                borderTopWidth: 1,
                                borderTopColor: theme.palette.primaryColor.main,
                                p: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                position: 'relative',
                                bottom: '-11%'
                            }}
                        >
                            <CustomBtn dataTestid='user-profile-update' btnType={'contained'} btnText={loading === 'update' ? 'Loading..' : 'Submit'} eventType={true}  />
                        </Box>
                    </Grid>

                </Grid>
            </form>
        </>
    );
};

export default UserProfile;