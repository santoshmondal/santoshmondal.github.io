import {
  Box,
  Hidden,
  Icon,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

import { toggleDrawerAction, toggleThemeAction } from "../store/apputil.slice";

const ToolbarContent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { dataStore } = useSelector((state) => state);

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
      {/** Start Content */}
      <IconButton
        edge="start"
        aria-label="open drawer"
        onClick={() => dispatch(toggleDrawerAction(true))}
      >
        <MenuRoundedIcon />
      </IconButton>

      {/** Middle Content */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={1}
      >
        <Box textAlign="center">
          <Typography variant="body1" fontSize={{ xs: 21, sm: 24 }}>
            {dataStore.username}
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="body2">{dataStore.designation}</Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="caption">{dataStore.headerRow3}</Typography>
        </Box>
      </Box>

      {/** End Content */}
      <Hidden smDown>
        <Tooltip title="Email me at santosh.ece06@gmail.com">
          <IconButton
            edge="start"
            aria-label="mail to"
            sx={{ mr: 1 }}
            onClick={(e) => openExternalLink(3)}
          >
            <MailRoundedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn Profile">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="linkedin profile url"
            sx={{ opacity: "0.85", mr: 1 }}
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
            sx={{ opacity: "0.85", mr: 1 }}
            onClick={(e) => openExternalLink(1)}
          >
            <Icon className="fab fa-github" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Toggle Light and Dark Theme">
          <IconButton
            edge="start"
            color="inherit"
            sx={{ opacity: "0.85" }}
            aria-label="toggle dark and light theme"
            onClick={(e) => dispatch(toggleThemeAction())}
          >
            {theme.palette.mode === "dark" ? (
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

export default ToolbarContent;
