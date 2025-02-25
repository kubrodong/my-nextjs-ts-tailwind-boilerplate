import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useLoginForm = (onSubmit: (values: FormValues) => void) => {
  return useFormik<FormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit,
  });
};

export interface FormValues {
  username: string;
  password: string;
}
