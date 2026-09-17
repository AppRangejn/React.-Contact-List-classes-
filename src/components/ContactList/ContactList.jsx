import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Stack, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ContactItem from '../ContactItem/ContactItem'
import { getContacts, resetContact } from '../../store/slices/contactSlice'

function ContactList() {
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contactList.contacts)

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])

    const onAddContact = () => {
        dispatch(resetContact())
    }

    return (
      <Box sx={{ flex: 1, width: '100%' }}>
      <Stack spacing={2}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          Contacts
        </Typography>

        {contacts?.length === 0 && (
          <Typography
            variant="body2"
            sx={{ fontFamily: '"Roboto Mono", monospace' }}
          >
            Contacts is empty
          </Typography>
        )}

        <Stack spacing={1}>
          {Array.isArray(contacts) &&
            contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        </Stack>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAddContact}
        >
          New Contact
        </Button>
      </Stack>
    </Box>
    )
}

export default ContactList