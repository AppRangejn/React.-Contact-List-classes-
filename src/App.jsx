import { Container, Paper, Typography, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="gradientTitle" component="h1" sx={{fontFamily: '"Roboto Mono", monospace', alignItems: 'center', display: 'flex'}}>
          <PersonIcon sx={{ color: 'primary.main', fontSize: 40}} />
          Contact List
        </Typography>
      </Stack>

      <Paper sx={{ p: 3 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
        >
          <ContactList />
          <ContactForm />
        </Stack>
      </Paper>
    </Container>
  )
}

export default App