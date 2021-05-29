import { useSelector } from "react-redux";
import { loadCSS } from "fg-loadcss";
import "./IndexPage.css";
import {
  AppBar,
  Box,
  Grid,
  Icon,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect } from "react";
import { LensOutlined, LensRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  toolbar: {
    height: "100px",
    backgroundColor: "#333330",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const IndexPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(theme);
  const appState = useSelector((state) => state);

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
          <Box textAlign="center">
            <Typography
              variant={matches ? "h5" : "h5"}
              style={{ fontWeight: "inherit" }}
            >
              {appState.username}
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography variant={matches ? "body2" : "body1"}>
              {appState.designation}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box>
        <Grid container>
          {/* Left Body Content */}
          <Grid item xs={12} md={3}>
            <Box
              style={{
                minHeight: matches ? "calc(100vh - 100px)" : "inherit",
                backgroundColor: "#3C3C39",
              }}
              p={1}
              px={2}
            >
              {/** SKILLS LIST */}
              {[...appState.sideItemList]
                .filter((fitem) => fitem.left)
                .map((item, index) => (
                  <Box key={index} mb={3}>
                    <Box
                      color="primary.contrastText"
                      fontWeight="bold"
                      style={{ fontSize: "large" }}
                    >
                      {item.title}
                    </Box>

                    {[...item.subItemList].map((subitem, index1) => (
                      <Box
                        key={index1}
                        display="flex"
                        px={1}
                        mt={1}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          color="primary.contrastText"
                          style={{ fontSize: "small" }}
                        >
                          {subitem.subtitle}
                        </Box>
                        <Box color="primary.contrastText" display="flex">
                          {[1, 2, 3, 4, 5].map((skillItem, skillIndex) => (
                            <>
                              {skillItem <= subitem.rating ? (
                                <LensRounded
                                  style={{
                                    color: theme.palette.common.white,
                                    fontSize: "xx-small",
                                    marginLeft: "4px",
                                  }}
                                />
                              ) : (
                                <LensOutlined
                                  style={{
                                    color: theme.palette.common.white,
                                    fontSize: "xx-small",
                                    marginLeft: "4px",
                                  }}
                                />
                              )}
                            </>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))}
            </Box>
          </Grid>

          {/* Body Content */}
          <Grid item xs={12} md={6}>
            Profile Body
          </Grid>

          {/* Right  Content */}
          <Grid item xs={12} md={3}>
            <Box
              style={{
                minHeight: matches ? "calc(100vh - 100px)" : "inherit",
                backgroundColor: "#3C3C39",
              }}
              p={1}
              px={2}
            >
              {/** SKILLS LIST */}
              {[...appState.sideItemList]
                .filter((fitem) => !fitem.left)
                .map((item, index) => (
                  <Box key={index} mb={3}>
                    <Box
                      color="primary.contrastText"
                      pb={1}
                      fontWeight="bold"
                      style={{ fontSize: "large" }}
                    >
                      {item.title}
                    </Box>

                    {[...item.subItemList].map((subitem, index1) => (
                      <Box
                        key={index1}
                        display="flex"
                        px={1}
                        mb={1}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          color="primary.contrastText"
                          style={{ fontSize: "small" }}
                        >
                          {subitem.subtitle}
                        </Box>
                        <Box color="primary.contrastText" display="flex">
                          {[1, 2, 3, 4, 5].map((skillItem, skillIndex) => (
                            <>
                              {skillItem <= subitem.rating ? (
                                <LensRounded
                                  style={{
                                    color: theme.palette.common.white,
                                    fontSize: "xx-small",
                                    marginLeft: "4px",
                                  }}
                                />
                              ) : (
                                <LensOutlined
                                  style={{
                                    color: theme.palette.common.white,
                                    fontSize: "xx-small",
                                    marginLeft: "4px",
                                  }}
                                />
                              )}
                            </>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
