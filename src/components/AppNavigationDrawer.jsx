import { useTheme } from "@emotion/react";
import {
  Box,
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
    <Paper>
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
      </List>

      <Box
        sx={{ height: "97vh" }}
        width={{ xs: "250px", sm: "275px" }}
        onClick={() => dispatch(toggleDrawerAction(false))}
        onKeyDown={() => dispatch(toggleDrawerAction(false))}
      >
        <h1>Hello World</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque
          voluptatibus nemo maiores pariatur? Iusto minus voluptas illum facere
          tempore beatae vitae? Qui blanditiis doloribus necessitatibus
          exercitationem eveniet. Veniam, dolores?
        </div>
      </Box>
    </Paper>
  );
};

export default AppNavigationDrawer;
