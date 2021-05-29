import { useSelector } from "react-redux";
import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import {
  AppBar,
  Box,
  Grid,
  Hidden,
  Icon,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { SidebarContent } from "./SidebarContent";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  toolbar: {
    height: "100px",
    backgroundColor: "#333330",
  },
}));

export const IndexPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const openExternalLink = (linkType) => {
    const elink =
      linkType === 1
        ? "https://github.com/santoshmondal"
        : "https://www.linkedin.com/in/santooindian/";
    window.open(elink);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Hidden smDown>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>

            <Grid item xs>
              <Box>
                <Box textAlign="center">
                  <Typography
                    variant={matches ? "h5" : "h5"}
                    style={{ fontWeight: "inherit" }}
                  >
                    {appState.username}
                  </Typography>
                </Box>

                <Box textAlign="center">
                  <Typography variant={matches ? "body2" : "body1"}>
                    {appState.designation}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Hidden smDown>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={(e) => openExternalLink(1)}
                >
                  <Icon className="fab fa-github" />
                </IconButton>

                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={(e) => openExternalLink(2)}
                >
                  <Icon className="fab fa-linkedin" />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box>
        <Grid container>
          {/* Left Body Content */}
          <Grid item xs={12} md={3} style={{ backgroundColor: "#3C3C39" }}>
            <SidebarContent left={true} />
          </Grid>

          {/* Body Content */}
          <Grid item xs={12} md={6}>
            Profile Body
          </Grid>

          {/* Right  Content */}
          <Grid item xs={12} md={3} style={{ backgroundColor: "#3C3C39" }}>
            <SidebarContent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
