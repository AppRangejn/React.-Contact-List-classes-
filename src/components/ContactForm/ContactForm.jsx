import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { addContact, updateContact, delContact, resetContact } from '../../store/slices/contactSlice'
import { DEFAULT_CONTACT } from '../../constants/constants'
import { contactValidationSchema } from '../../validation/contactSchema'
import { AppTextField } from '../common/AppTextField'
import { Box, Button, Stack, Typography } from '@mui/material'

function ContactForm() {
  const dispatch = useDispatch()
  const selectedContact = useSelector((state) => state.contactList.selectedContact)

  const formik = useFormik({
    initialValues: selectedContact || DEFAULT_CONTACT,
    enableReinitialize: true,
    validationSchema: contactValidationSchema,
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      if (!values.id) {
        
        dispatch(addContact(values))
      } else {
        dispatch(updateContact(values))
      }
      dispatch(resetContact())
      resetForm({ values: DEFAULT_CONTACT })
    },
  })

  const handleDelete = (e) => {
    e.preventDefault()
    if (formik.values.id) {
      dispatch(delContact(formik.values.id))
      dispatch(resetContact())
    }
  }

  const isSaveDisabled = formik.values.id
    ? !formik.isValid || formik.isSubmitting
    : !formik.isValid || !formik.dirty || formik.isSubmitting

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ flex: 1, width: '100%' }}
    >
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontFamily: '"Roboto Mono", monospace' }}>
          {formik.values.id ? 'Edit Contact' : 'New Contact'}
        </Typography>

        <AppTextField name="firstName" label="First Name" formik={formik} />
        <AppTextField name="lastName" label="Last Name" formik={formik} />
        <AppTextField name="email" label="Email" type="email" formik={formik} />
        <AppTextField name="phone" label="Phone" formik={formik} />

        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSaveDisabled}
            fullWidth
          >
            Save
          </Button>

          {formik.values.id && (
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default ContactForm