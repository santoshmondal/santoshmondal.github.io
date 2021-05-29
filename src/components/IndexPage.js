import { useSelector } from "react-redux";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";

export const IndexPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  console.log(theme);

  const appState = useSelector((state) => state);

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
        p={{ xs: 1, md: 0 }}
      >
        <Box textAlign="center">
          <Typography
            variant={matches ? "h4" : "h5"}
            style={{ fontWeight: "bolder" }}
          >
            Santosh Kumar Mondal
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h6">Founder / Product Architect</Typography>
        </Box>
      </Box>

      <Grid container>
        <Grid item>Container 2</Grid>
      </Grid>
    </Box>
  );
};
