import { Box, Paper, useMediaQuery, useTheme } from "@material-ui/core";

export const ProfileBodyContent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box p={1}>
      <Paper>Hello Profile</Paper>
    </Box>
  );
};
