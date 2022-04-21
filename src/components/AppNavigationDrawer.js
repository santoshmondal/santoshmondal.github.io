import {
  Box,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  list: {
    width: 275,
  },
  fullList: {
    width: "auto",
  },
});

export const AppNavigationDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: "TOGGLE_DRAWER" });
  };

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
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{
        backgroundColor: theme.palette.background.paper,
        height: "100%",
        color: theme.palette.text.primary,
      }}
    >
      <List>
        <ListItem button onClick={(e) => dispatch({ type: "TOGGLE_THEME" })}>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            {appState.theme === "dark" ? (
              <Brightness7RoundedIcon />
            ) : (
              <Brightness4RoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={"Toggle Dark & Light Theme"} />
        </ListItem>

        <ListItem button onClick={(e) => openExternalLink(3)}>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Email/Inbox Me"} />
        </ListItem>

        <ListItem button onClick={(e) => openExternalLink(1)}>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <Icon className="fab fa-github" />
          </ListItemIcon>
          <ListItemText primary={"Github Profile"} />
        </ListItem>

        <ListItem button onClick={(e) => openExternalLink(2)}>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <Icon className="fab fa-linkedin" />
          </ListItemIcon>
          <ListItemText primary={"LinkedIn Profile"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <PhoneIphoneRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"+91-9323791976"} />
        </ListItem>
      </List>
    </div>
  );
};
