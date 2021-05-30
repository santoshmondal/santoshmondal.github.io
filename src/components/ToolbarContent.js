import { useSelector } from "react-redux";
import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import {
  Box,
  Grid,
  Hidden,
  Icon,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  toolbar: {
    height: "100px",
    backgroundColor: "#333330",
  },
}));

export const ToolbarContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => node.parentNode.removeChild(node);
  }, []);

  const openExternalLink = (linkType) => {
    let elink = "";

    switch (linkType) {
      case 1:
        elink = appState.githubUrl;
        break;
      case 2:
        elink = appState.linkedinUrl;
        break;
      case 3:
        elink = appState.mailTo;
        break;
      default:
        break;
    }
    window.open(elink);
  };

  return (
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

          <Box textAlign="center">
            <Typography variant={matches ? "caption" : "caption"}>
              {appState.headerRow3}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Hidden smDown>
        <Grid item>
          <Tooltip title="Email me at santosh.ece06@gmail.com">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={(e) => openExternalLink(3)}
            >
              <EmailRoundedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn Profile">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={(e) => openExternalLink(2)}
            >
              <Icon className="fab fa-linkedin" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Github Profile">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={(e) => openExternalLink(1)}
            >
              <Icon className="fab fa-github" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Hidden>
    </Grid>
  );
};
