import { useSelector } from "react-redux";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";
import { Box, Grid, Icon, Typography, useTheme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";

export const IndexPage = () => {
  const appState = useSelector((state) => state);
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" style={{ height: "100vh" }}>
      <Box
        color={theme.palette.common.white}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={1 / 6}
        style={{ backgroundColor: "#333330" }}
      >
        <Typography>
          <Box>Santosh Mondal</Box>
        </Typography>
        <Typography>
          <Box>FOUNDER / PRODUCT ARCHITECT</Box>
        </Typography>
      </Box>

      <Grid container>
        <Grid item>Container 2</Grid>
      </Grid>
    </Box>
  );
};
