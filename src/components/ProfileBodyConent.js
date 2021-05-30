import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "45%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
  },
}));

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
        style={{ opacity: 0.9 }}
      >
        <Typography variant="body2">{appState.profile.summary}</Typography>
      </Box>
    </Box>
  );
};

export const ProfileBodyContent = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const employment = useSelector((state) => state.profile.employment);

  return (
    <Box p={1} px={2} pb={1}>
      <Box color="primary.contrastText" fontWeight="bold" mb={1}>
        <Typography variant="h6">{employment.title}</Typography>
      </Box>

      {[...employment.list].map((item, index) => (
        <Accordion
          key={index}
          style={{ background: "#3C3C39", color: theme.palette.common.white }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: theme.palette.common.white }} />
            }
          >
            <Box>
              <Typography className={classes.heading}>{item.etitle}</Typography>
              <Typography
                className={classes.secondaryHeading}
                style={{ color: theme.palette.grey[400] }}
              >
                {item.esubtitle2}
              </Typography>
              <Typography
                className={classes.secondaryHeading}
                style={{ color: theme.palette.grey[400] }}
              >
                {item.esubtitle1}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
