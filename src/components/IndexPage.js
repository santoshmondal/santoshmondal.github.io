import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import {
  AppBar,
  Box,
  Grid,
  Hidden,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { useEffect } from "react";
import { SidebarContent } from "./SidebarContent";
import { ToolbarContent } from "./ToolbarContent";
import {
  ProfileBodyContent,
  ProfileBodyContent1,
  ProfileSumaryContent,
} from "./ProfileBodyConent";

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
          {/** Body Content for Small Device */}
          <Hidden mdUp>
            <Grid item xs={12} style={{ backgroundColor: "#3C3C39" }}>
              <ProfileSumaryContent />
            </Grid>
          </Hidden>

          {/* Left Body Content */}
          <Grid
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#3C3C39",
              borderRight: "1px solid rgba(255, 255, 255, 0.075)",
            }}
          >
            <SidebarContent left={true} />
          </Grid>

          {/* Body Content For Medium and Large Device */}
          <Hidden smDown>
            <Grid item xs={12} md={6} style={{ backgroundColor: "#3C3C39" }}>
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
              backgroundColor: "#3C3C39",
              borderLeft: "1px solid rgba(255, 255, 255, 0.075)",
            }}
          >
            <SidebarContent />
          </Grid>

          {/** Body Content for Small Device */}
          <Hidden mdUp>
            <Grid item xs={12} style={{ backgroundColor: "#3C3C39" }}>
              <ProfileBodyContent1 />
              <ProfileBodyContent />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  );
};
