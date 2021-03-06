import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    flexBasis: "45%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
  },
}));

export const ProfileSumaryContent = () => {
  const appState = useSelector((state) => state);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box p={2} px={2} pb={1} color="text.primary">
      <Box fontWeight="bold">
        <Typography variant="h6">{appState.profile.title}</Typography>
      </Box>

      <Box
        textAlign="justify"
        style={{ opacity: 0.9 }}
        p={1}
        borderRadius={4}
        bgcolor="background.paper"
      >
        <Typography variant={matches ? "body2" : "caption"}>
          {appState.profile.summary}
        </Typography>
      </Box>
    </Box>
  );
};

export const ProfileBodyContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const employment = useSelector((state) => state.profile.employment);

  return (
    <Box p={1} px={2} pb={1} color="text.primary">
      <Box fontWeight="bold" mb={1}>
        <Typography variant="h6">{employment.title}</Typography>
      </Box>

      {[...employment.list].map((item, index) => (
        <Accordion
          key={index}
          style={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: theme.palette.text.primary }} />
            }
          >
            <Box>
              <Typography className={classes.heading}>{item.etitle}</Typography>
              <Typography className={classes.secondaryHeading}>
                {item.esubtitle2}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {item.esubtitle1}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{""}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export const ProfileBodyContent1 = () => {
  const expertise = useSelector((state) => state.profile.expertise);
  const industries = useSelector((state) => state.profile.industries);

  return (
    <>
      <CommonListBodyContent refItem={expertise} />
      <CommonListBodyContent refItem={industries} />
    </>
  );
};

const CommonListBodyContent = ({ refItem }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box p={1} px={2} pb={1} color="text.primary">
      <Box fontWeight="bold">
        <Typography variant="h6">{refItem.title}</Typography>
      </Box>
      <Box bgcolor="background.paper" borderRadius={4}>
        <List
          component="nav"
          className={classes.root}
          aria-label="contacts"
          dense={true}
        >
          {[...refItem.list].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <StarIcon
                  style={{
                    fontSize: "large",
                    color: theme.palette.text.primary,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
