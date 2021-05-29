import { Box, makeStyles, useTheme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import "./IndexPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export const DevPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <div className="beautify">
      <Box className={classes.root} p={2} borderRadius={4} fontWeight="bolder">
        Dev And Testing
      </Box>
      <Box mb={1}>
        <Alert severity="info">This is an info alert — check it out!</Alert>
      </Box>

      <Box mb={1}>
        <Alert severity="success">
          This is an success alert — check it out!
        </Alert>
      </Box>

      <Box mb={1}>
        <Alert severity="warning">
          This is an warning alert — check it out!
        </Alert>
      </Box>

      <Box mb={1}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Box>

      <div>Github Profile</div>
    </div>
  );
};
