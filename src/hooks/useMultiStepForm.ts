import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useMultiStepForm = (onSubmit: (values: FormValues) => void) => {
  return useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Too short')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit,
  });
};

export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
