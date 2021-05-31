import {
  Box,
  Divider,
  Hidden,
  Icon,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { LensOutlined, LensRounded } from "@material-ui/icons";
import React from "react";

export const SidebarContent = ({ left }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  return (
    <Box
      p={2}
      px={2}
      pb={1}
      color="text.primary"
      style={{
        maxHeight: left && matches ? "calc(100vh - 100px)" : "inherit",
        position: left && matches ? "fixed" : "inherit",
        overflow: left && matches ? "auto" : "inherit",
        width: left && matches ? "25%" : "inherit",
      }}
    >
      {/** SKILLS LIST */}
      {[...appState.sideItemList]
        .filter((fitem) => fitem.left === left)
        .map((item, index) => (
          <React.Fragment key={index}>
            <Box fontWeight="bold" style={{ fontSize: "large" }}>
              {item.title}
            </Box>

            <Box
              mb={1}
              bgcolor={!matches ? "background.paper" : "inherit"}
              borderRadius={4}
              p={1}
            >
              {[...item.subItemList].map((subitem, index1) => (
                <Box
                  key={index1}
                  display="flex"
                  px={1}
                  mb={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center">
                    <Icon
                      className={subitem.icon}
                      style={{ fontSize: "small" }}
                    />
                    <Box ml={1} style={{ fontSize: "small" }}>
                      {subitem.subtitle}
                    </Box>
                  </Box>
                  <Box display="flex">
                    {[1, 2, 3, 4, 5].map((skillItem, skillIndex) => (
                      <Box key={skillIndex}>
                        {skillItem <= subitem.rating ? (
                          <LensRounded
                            style={{
                              fontSize: "xx-small",
                              marginLeft: "4px",
                              opacity: ".75",
                            }}
                          />
                        ) : (
                          <LensOutlined
                            style={{
                              fontSize: "xx-small",
                              marginLeft: "4px",
                              opacity: ".75",
                            }}
                          />
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}

              <Hidden smDown>
                <Box mt={1}>
                  <Divider />
                </Box>
              </Hidden>
            </Box>
          </React.Fragment>
        ))}
    </Box>
  );
};
