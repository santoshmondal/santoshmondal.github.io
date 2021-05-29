import { useSelector } from "react-redux";
import "./IndexPage.css";
import {
  AppBar,
  Box,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  toolbar: {
    height: "128px",
    backgroundColor: "#333330",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const IndexPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(theme);
  const appState = useSelector((state) => state);

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box textAlign="center">
            <Typography
              variant={matches ? "h4" : "h5"}
              style={{ fontWeight: "inherit" }}
            >
              Santosh Kumar Mondal
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography variant={matches ? "h6" : "body1"}>
              Founder / Product Architect
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box style={{ height: "calc(100vh - 128px)" }} bgcolor="primary.main">
        Hello World
      </Box>
    </>
  );
};
