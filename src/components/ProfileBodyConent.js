import { Box, Paper, useTheme } from "@material-ui/core";

export const ProfileBodyContent = () => {
  const theme = useTheme();
  return (
    <Box>
      <Paper>Hello Profile</Paper>
    </Box>
  );
};
