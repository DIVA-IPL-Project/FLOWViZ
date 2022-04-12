import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from '../../config/theme';

const theme = createTheme();

function LoginForm() {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                //autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
        </>
    )
}

function RegisterForm() {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                //autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Surname"
                name="Surname"
                autoComplete="Surname"
            />
            { LoginForm() }
        </>
    )
}

export default function UserForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return (
    <ThemeProvider theme={Theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: Theme.palette.secondary.main }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {props.operationName}
            </Typography>    

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            { (() => {
                switch(props.operationName) {
                    case "Register": return <RegisterForm/>
                    case "Login": return <LoginForm/>
                }
                })()
            }
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: Theme.palette.primary.dark }}
            >
                {props.operationName}
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    {(() => {if (props.operationName === "Login") return "Don't have an account? Sign Up"})()}
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>
    );
}