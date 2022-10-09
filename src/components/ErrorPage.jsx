import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let navigate = useNavigate();

  const toHomePage = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{ height: "100vh" }}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Paper id="error-page">
        <Box
          sx={{ width: "50vw", p: 4 }}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography variant="h1" textAlign={"center"}>
            Oops!
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            Sorry, an unexpected error has occurred.
          </Typography>
          <Typography textAlign={"center"}>
            <i>{error.statusText || error.message}</i>
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => navigate("/")}
          >
            Return Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
