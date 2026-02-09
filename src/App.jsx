import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxwidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        MUI Learning – Day 1
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This is my first MUI app.
      </Typography>

      <Button variant="contained" color="secondary">
        Click Me
      </Button>

      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, mt: 4 }}
      >
        Responsive Title
      </Typography>
    </Container>
  );
}

export default App;
