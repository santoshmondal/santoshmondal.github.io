import {
  AppBar,
  Button,
  Fab,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
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
      <Toolbar id="back-to-top-anchor" />

      <SidebarContent left={true} />
      <ProfileSumaryContent />
      <ProfileBodyContent />
      <ProfileBodyContent1 />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
