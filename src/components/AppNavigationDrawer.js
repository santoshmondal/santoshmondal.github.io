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

import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const AppNavigationDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
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
        <ListItem button>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <Brightness7RoundedIcon />
          </ListItemIcon>
          <ListItemText primary={"Toggle Dark & Light Theme"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Email/Inbox Me"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <Icon className="fab fa-github" />
          </ListItemIcon>
          <ListItemText primary={"Github Profile"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon
            style={{ color: theme.palette.text.primary, opacity: "0.85" }}
          >
            <Icon className="fab fa-linkedin" />
          </ListItemIcon>
          <ListItemText primary={"LinkedIn Profile"} />
        </ListItem>
      </List>
    </div>
  );
};
