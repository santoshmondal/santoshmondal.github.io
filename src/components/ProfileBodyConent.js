import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";

export const ProfileSumaryContent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);

  return (
    <Box p={2} px={2} pb={1}>
      <Box color="primary.contrastText" fontWeight="bold">
        <Typography variant="h6">{appState.profile.title}</Typography>
      </Box>

      <Box
        color="primary.contrastText"
        textAlign="justify"
        px={!matches ? 0 : 0}
      >
        <Typography variant="body2">{appState.profile.summary}</Typography>
      </Box>
    </Box>
  );
};

export const ProfileBodyContent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const appState = useSelector((state) => state);
  const employment = useSelector((state) => state.profile.employment);

  return (
    <Box p={1} px={2} pb={1}>
      <Box color="primary.contrastText" fontWeight="bold">
        <Typography variant="h6">{employment.title}</Typography>
      </Box>
    </Box>
  );
};
