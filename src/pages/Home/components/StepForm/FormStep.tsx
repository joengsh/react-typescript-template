import React from 'react';
import tw, { css } from 'twin.macro';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormStep1Schema = Yup.object().shape({
  firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  surname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const formStyle = css`
  & {
    ${tw`flex flex-col gap-4 m-4`}
  }
  & .MuiTextField-root {
    ${tw`flex-1`}
  }
`;

type FormStep1Props = {
  onConfirm: (firstname: string, surname: string, email: string) => void;
};

export const FormStep1: React.FC<FormStep1Props> = ({ onConfirm }) => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      surname: '',
      email: '',
    },
    validationSchema: FormStep1Schema,
    onSubmit: (values) => {
      console.log(values);
      onConfirm(values.firstname, values.surname, values.email);
    },
  });
  return (
    <div>
      <form css={[formStyle]} onSubmit={formik.handleSubmit}>
        <div tw="flex flex-row gap-4">
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname ? formik.errors.firstname ?? ' ' : ' '}
          />
          <TextField
            id="surname"
            name="surname"
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname ? formik.errors.surname ?? ' ' : ' '}
          />
        </div>
        <div tw="flex flex-row gap-4">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email ?? ' ' : ' '}
          />
        </div>
        <div tw="flex flex-row gap-4 justify-end">
          <Button fullWidth color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

type FormStep2Props = {
  onConfirm: (tel: string, gender: string, dob: string) => void;
};

export const FormStep2: React.FC<FormStep2Props> = ({ onConfirm }) => {
  return null;
};

type FormStep3Props = {
  onConfirm: (comment: string) => void;
};

export const FormStep3: React.FC<FormStep3Props> = ({ onConfirm }) => {
  return null;
};
