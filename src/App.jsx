import {
  AppBar,
  Button,
  Fab,
  Hidden,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";

import ScrollTop from "./components/ScrollTop";
import TestScroll from "./components/TestScroll";
import { toggleDrawerAction } from "./store/apputil.slice";
import AppNavigationDrawer from "./components/AppNavigationDrawer";
import React from "react";
import ToolbarContent from "./components/ToolbarContent";
import {
  ProfileBodyContent,
  ProfileBodyContent1,
  ProfileSumaryContent,
} from "./components/ProfileBodyConent";
import { SidebarContent } from "./components/SidebarContent";

function App(props) {
  let theme = useTheme();
  const dispatch = useDispatch();
  const { apputilStore } = useSelector((state) => state);

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

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="left"
        open={apputilStore.drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AppNavigationDrawer />
      </SwipeableDrawer>

      <AppBar position="sticky">
        <Toolbar
          sx={{
            height: { xs: "120px", sm: "110px" },
            alignItems: "flex-start",
            mt: 1,
          }}
        >
          <ToolbarContent />
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor" />

      <Grid container>
        {/** Hidden In Large Screen */}
        <Hidden mdUp>
          <Grid xs={12}>
            <ProfileSumaryContent />
            <ProfileBodyContent1 />
            <ProfileBodyContent />
          </Grid>
          <Grid xs={12}>
            <SidebarContent left={true} />
          </Grid>
          <Grid xs={12}>
            <SidebarContent />
          </Grid>
        </Hidden>

        {/* Hidden In Smaller Screen */}
        <Hidden mdDown>
          <Grid
            xs={12}
            md={3}
            sx={{
              borderRight:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.075)"
                  : "1px solid rgba(0, 0, 0, 0.075)",
            }}
          >
            <SidebarContent left={true} />
          </Grid>
          <Grid xs={12} md={6}>
            <ProfileSumaryContent />
            <ProfileBodyContent1 />
            <ProfileBodyContent />
          </Grid>
          <Grid
            xs={12}
            md={3}
            sx={{
              borderLeft:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.075)"
                  : "1px solid rgba(0, 0, 0, 0.075)",
            }}
          >
            <SidebarContent />
          </Grid>
        </Hidden>
      </Grid>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
