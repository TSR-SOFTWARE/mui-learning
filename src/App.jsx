import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 3,
            width: "100%",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight={600}
            gutterBottom
          >
            Interest Calculator
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Principal Amount" type="number" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Rate (%)" type="number" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Time (Years)" type="number" />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth size="large" variant="contained">
                Calculate
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
