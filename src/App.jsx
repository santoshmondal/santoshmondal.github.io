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
import { toggleDrawerAction } from "./store/data.slice";
import AppNavigationDrawer from "./components/AppNavigationDrawer";
import React from "react";

function App(props) {
  const dispatch = useDispatch();
  const { dataStore } = useSelector((state) => state);

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
        open={dataStore.drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AppNavigationDrawer />
      </SwipeableDrawer>

      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Button onClick={() => dispatch(toggleDrawerAction())}>Drawer</Button>

      <TestScroll />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
