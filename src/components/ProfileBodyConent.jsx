import { useTheme } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";

export const ProfileSumaryContent = () => {
  const { dataStore } = useSelector((state) => state);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box p={2} px={2} pb={1} color="text.primary">
      <Box fontWeight="bold">
        <Typography variant="h6">{dataStore.profile.title}</Typography>
      </Box>

      <Box
        textAlign="justify"
        sx={{ opacity: 0.9 }}
        p={1}
        borderRadius={4}
        bgcolor="background.paper"
      >
        <Typography variant={matches ? "body2" : "caption"}>
          {dataStore.profile.summary}
        </Typography>
      </Box>
    </Box>
  );
};

export const ProfileBodyContent = () => {
  const theme = useTheme();
  const { employment } = useSelector((state) => state.dataStore.profile);

  return (
    <Box p={1} px={2} pb={1} color="text.primary">
      <Box fontWeight="bold" mb={1}>
        <Typography variant="h6">{employment.title}</Typography>
      </Box>

      {[...employment.list].map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography>{item.etitle}</Typography>
              <Typography>{item.esubtitle2}</Typography>
              <Typography>{item.esubtitle1}</Typography>
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
  const { expertise, industries } = useSelector(
    (state) => state.dataStore.profile
  );

  return (
    <>
      <CommonListBodyContent refItem={expertise} />
      <CommonListBodyContent refItem={industries} />
    </>
  );
};

const CommonListBodyContent = ({ refItem }) => {
  const theme = useTheme();

  return (
    <Box mb={1} p={1} px={2} pb={1}>
      <Box fontWeight="bold">
        <Typography variant="h6">{refItem.title}</Typography>
      </Box>
      <Box borderRadius={4}>
        <Paper>
          <List component="nav" aria-label="contacts" dense={true}>
            {[...refItem.list].map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <StarIcon sx={{ fontSize: "large" }} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};
