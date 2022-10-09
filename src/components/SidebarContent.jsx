import { Divider, Hidden, Icon, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";

import LensRounded from "@mui/icons-material/LensRounded";
import LensOutlined from "@mui/icons-material/LensOutlined";
import { useSelector } from "react-redux";
import React from "react";

export const SidebarContent = ({ left }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { dataStore } = useSelector((state) => state);

  return (
    <Box
      p={2}
      px={2}
      pb={1}
      sx={{
        maxHeight: left && matches ? "calc(100vh - 100px)" : "inherit",
        position: left && matches ? "fixed" : "inherit",
        overflow: left && matches ? "auto" : "inherit",
        width: left && matches ? "25%" : "100%",
      }}
    >
      {/** SKILLS LIST */}
      {[...dataStore.sideItemList]
        .filter((fitem) => fitem.left === left)
        .map((item, index) => (
          <React.Fragment key={index}>
            <Box fontWeight="bold">{item.title}</Box>

            <Box mb={1} borderRadius={4} p={1}>
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
                    <Icon className={subitem.icon} sx={{ fontSize: "small" }} />
                    <Box ml={1} sx={{ fontSize: "small" }}>
                      {subitem.subtitle}
                    </Box>
                  </Box>
                  <Box display="flex">
                    {[1, 2, 3, 4, 5].map((skillItem, skillIndex) => (
                      <Box key={skillIndex}>
                        {skillItem <= subitem.rating ? (
                          <LensRounded
                            sx={{
                              fontSize: "xx-small",
                              marginLeft: "4px",
                              opacity: ".75",
                            }}
                          />
                        ) : (
                          <LensOutlined
                            sx={{
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
