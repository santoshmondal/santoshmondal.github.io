import { useTheme } from "@mui/material";
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerAction, toggleThemeAction } from "../store/apputil.slice";

import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";

const AppNavigationDrawer = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  let { apputilStore } = useSelector((state) => state);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggleDrawerAction(open));
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
    <Box width={{ xs: "275px", sm: "300px" }}>
      <Paper sx={{ height: "100vh" }}>
        <List>
          <ListItemButton onClick={(e) => dispatch(toggleThemeAction())}>
            <ListItemIcon>
              {theme.palette.mode === "dark" ? (
                <Brightness7RoundedIcon />
              ) : (
                <Brightness4RoundedIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={"Toggle Theme"} />
          </ListItemButton>

          <ListItemButton onClick={(e) => openExternalLink(3)}>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Email/Inbox Me"} />
          </ListItemButton>

          <ListItemButton onClick={(e) => openExternalLink(1)}>
            <ListItemIcon>
              <Icon className="fab fa-github" />
            </ListItemIcon>
            <ListItemText primary={"Github Profile"} />
          </ListItemButton>

          <ListItemButton onClick={(e) => openExternalLink(2)}>
            <ListItemIcon>
              <Icon className="fab fa-linkedin" />
            </ListItemIcon>
            <ListItemText primary={"LinkedIn Profile"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PhoneIphoneRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"+91-9323791976"} />
          </ListItemButton>
        </List>
      </Paper>
    </Box>
  );
};

export default AppNavigationDrawer;
