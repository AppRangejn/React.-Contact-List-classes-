import { useDispatch } from 'react-redux'
import { Paper, Typography, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { delContact, selectContact } from '../../store/slices/contactSlice'

function ContactItem({ contact}) {
  const dispatch = useDispatch()

  const onItemDelete = () => {
    dispatch(delContact(contact.id))
  }

  const onContactEdit = () => {
    dispatch(selectContact(contact))
  }

  return (
    <Paper variant="outlined" onDoubleClick={onContactEdit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 1.5,
        '&:hover': {
          borderColor: 'primary.light',
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontFamily: '"Roboto Mono", monospace',
        }}
      >
        {contact.firstName} {contact.lastName}
      </Typography>

      <IconButton size="small" onClick={onItemDelete}>
        <ClearIcon fontSize="small" />
      </IconButton>
    </Paper>
  )
}

export default ContactItem