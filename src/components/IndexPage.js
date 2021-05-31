import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import {
  AppBar,
  Box,
  Fab,
  Grid,
  Hidden,
  makeStyles,
  Snackbar,
  SwipeableDrawer,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SidebarContent } from "./SidebarContent";
import { ToolbarContent } from "./ToolbarContent";
import {
  ProfileBodyContent,
  ProfileBodyContent1,
  ProfileSumaryContent,
} from "./ProfileBodyConent";
import { useDispatch, useSelector } from "react-redux";
import { AppNavigationDrawer } from "./AppNavigationDrawer";
import { ScrollTop } from "../common/scrolltop/ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "100px",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

export const IndexPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

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

  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="left"
        open={appState.drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AppNavigationDrawer />
      </SwipeableDrawer>

      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Box id="back-to-top-anchor" />

      <Grid container>
        {/** Body Content for Small Device */}
        <Hidden mdUp>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: theme.palette.background.default }}
          >
            <ProfileSumaryContent />
            <ProfileBodyContent1 />
            <ProfileBodyContent />
          </Grid>
        </Hidden>

        {/* Left Body Content */}
        <Grid
          item
          xs={12}
          md={3}
          style={{
            backgroundColor: theme.palette.background.default,
            borderRight:
              theme.palette.type === "dark"
                ? "1px solid rgba(255, 255, 255, 0.075)"
                : "1px solid rgba(0, 0, 0, 0.075)",
          }}
        >
          <SidebarContent left={true} />
        </Grid>

        {/* Body Content For Medium and Large Device */}
        <Hidden smDown>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: theme.palette.background.default,
            }}
          >
            <ProfileSumaryContent />
            <ProfileBodyContent1 />
            <ProfileBodyContent />
          </Grid>
        </Hidden>

        {/* Right  Content */}
        <Grid
          item
          xs={12}
          md={3}
          style={{
            backgroundColor: theme.palette.background.default,
            borderLeft:
              theme.palette.type === "dark"
                ? "1px solid rgba(255, 255, 255, 0.075)"
                : "1px solid rgba(0, 0, 0, 0.075)",
          }}
        >
          <SidebarContent />
        </Grid>

        {/** Body Content for Small Device */}
        <Hidden xsUp>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: theme.palette.background.paper }}
          >
            <ProfileBodyContent1 />
            <ProfileBodyContent />
          </Grid>
        </Hidden>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          icon={false}
          style={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
          {appState.welcome} &#128516;
        </Alert>
      </Snackbar>

      <ScrollTop {...props}>
        <Fab
          size="large"
          aria-label="scroll back to top"
          className={classes.backtotopFab}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
