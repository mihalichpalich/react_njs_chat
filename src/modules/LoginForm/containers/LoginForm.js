import {withFormik} from "formik";
import LoginForm from './containers/LoginForm';
import validateForm from '../../../utils/validate';

export default withFormik({
  validate: values => {
    let errors = {};
    const validate = validateFunc({isAuth: true});

    validateForm({isAuth: true, values, errors});

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);