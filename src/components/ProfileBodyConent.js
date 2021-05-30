import { Box, Paper, useTheme } from "@material-ui/core";

export const ProfileBodyContent = () => {
  const theme = useTheme();
  return (
    <Box p={1}>
      <Paper>Hello Profile</Paper>
    </Box>
  );
};
