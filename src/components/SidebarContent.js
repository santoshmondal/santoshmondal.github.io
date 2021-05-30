import { Box, Divider, Icon, useMediaQuery, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { LensOutlined, LensRounded } from "@material-ui/icons";

export const SidebarContent = ({ left }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  return (
    <Box p={1} px={2}>
      {/** SKILLS LIST */}
      {[...appState.sideItemList]
        .filter((fitem) => fitem.left === left)
        .map((item, index) => (
          <Box key={index} mb={2}>
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
                <Box display="flex" alignItems="center">
                  <Icon
                    className={subitem.icon}
                    style={{
                      color: theme.palette.common.white,
                      fontSize: "small",
                    }}
                  />
                  <Box
                    ml={1}
                    color="primary.contrastText"
                    style={{ fontSize: "small" }}
                  >
                    {subitem.subtitle}
                  </Box>
                </Box>
                <Box color="primary.contrastText" display="flex">
                  {[1, 2, 3, 4, 5].map((skillItem, skillIndex) => (
                    <Box key={skillIndex}>
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
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}

            <Box mt={1}>
              <Divider />
            </Box>
          </Box>
        ))}
    </Box>
  );
};
