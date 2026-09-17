import { TextField } from '@mui/material'
export function AppTextField({ name, label, type = 'text', formik }) {
  const { values, errors, touched, handleChange, handleBlur} = formik

  const isError = touched[name] && Boolean(errors[name])

  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={isError}
      helperText={isError ? errors[name] : ''}
    />
  )
}