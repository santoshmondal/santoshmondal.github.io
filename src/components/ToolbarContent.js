import { useDispatch, useSelector } from "react-redux";
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
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";

const useStyles = makeStyles((theme) => ({}));

export const ToolbarContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();

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
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="1"
        mt={{ xs: 1, sm: 1 }}
        style={{ marginLeft: matches ? "32px" : "-16px" }}
      >
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

      <Hidden smDown>
        <Tooltip title="Email me at santosh.ece06@gmail.com">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="mail to"
            onClick={(e) => openExternalLink(3)}
          >
            <EmailRoundedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn Profile">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="linkedin profile url"
            onClick={(e) => openExternalLink(2)}
          >
            <Icon className="fab fa-linkedin" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Github Profile">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="github profile"
            onClick={(e) => openExternalLink(1)}
          >
            <Icon className="fab fa-github" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Toggle Light and Dark Theme">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="toggle dark and light theme"
            onClick={(e) => dispatch({ type: "TOGGLE_THEME" })}
          >
            {appState.theme === "dark" ? (
              <Brightness7RoundedIcon />
            ) : (
              <Brightness4RoundedIcon />
            )}
          </IconButton>
        </Tooltip>
      </Hidden>
    </>
  );
};
