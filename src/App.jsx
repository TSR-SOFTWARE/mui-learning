import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { calculate } from "./services/calcyservices";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCalculate = async () => {
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const data = await calculate(principal, rate, time);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            Simple Interest Calculator
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Principal Amount"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rate (%)"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Time (Years)"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={handleCalculate}
                disabled={loading || !principal || !rate || !time}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Calculate"}
              </Button>
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}

            {result && (
              <Grid item xs={12}>
                <Alert severity="success">
                  <Typography variant="body2">Simple Interest: <strong>₹{result.simpleInterest.toFixed(2)}</strong></Typography>
                  <Typography variant="body2">Total Amount: <strong>₹{result.totalAmount.toFixed(2)}</strong></Typography>
                </Alert>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
