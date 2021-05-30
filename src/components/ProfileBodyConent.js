import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";

export const ProfileBodyContent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  return (
    <Box p={1} px={2}>
      <Box color="primary.contrastText">
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {appState.profile.title}
        </Typography>

        <Typography variant="body2" style={{ textAlign: "justify" }}>
          {appState.profile.summary}
        </Typography>
      </Box>
    </Box>
  );
};
