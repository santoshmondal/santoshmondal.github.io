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
import { AccessAlarmRounded } from "@material-ui/icons";

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

      <Box>
        <Grid container>
          {/* Left Body Content */}
          <Grid item xs={12} md={3}>
            <Box
              style={{
                minHeight: matches ? "calc(100vh - 128px)" : "inherit",
                backgroundColor: "#3C3C39",
              }}
              p={1}
              px={2}
            >
              <Box color="primary.contrastText">
                <Typography variant="h6">CONTACT INFO</Typography>
              </Box>

              <Box display="flex" mt={1} alignItems="center">
                <AccessAlarmRounded
                  style={{
                    color: theme.palette.common.white,
                    fontSize: "large",
                  }}
                />
                <Box
                  ml={2}
                  color="primary.contrastText"
                  style={{ fontSize: "small" }}
                >
                  +91-9323791976
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Body Content */}
          <Grid item xs={12} md={9}>
            HElloo Universeee
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
