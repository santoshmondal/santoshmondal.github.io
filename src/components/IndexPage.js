import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import { AppBar, Box, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { useEffect } from "react";
import { SidebarContent } from "./SidebarContent";
import { ToolbarContent } from "./ToolbarContent";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  toolbar: {
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
    backgroundColor: "#333330",
  },
}));

export const IndexPage = () => {
  const classes = useStyles();

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>

      <Box>
        <Grid container>
          {/* Left Body Content */}
          <Grid item xs={12} md={3} style={{ backgroundColor: "#3C3C39" }}>
            <SidebarContent left={true} />
          </Grid>

          {/* Body Content */}
          <Grid item xs={12} md={6}>
            Profile Body
          </Grid>

          {/* Right  Content */}
          <Grid item xs={12} md={3} style={{ backgroundColor: "#3C3C39" }}>
            <SidebarContent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
