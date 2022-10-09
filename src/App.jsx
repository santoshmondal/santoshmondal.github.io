import { AppBar, Fab, Toolbar, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./components/ScrollTop";
import TestScroll from "./components/TestScroll";

function App(props) {
  return (
    <>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <TestScroll />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
