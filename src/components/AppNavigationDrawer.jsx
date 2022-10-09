import { useTheme } from "@emotion/react";
import { Box, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleDrawerAction } from "../store/data.slice";

const AppNavigationDrawer = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Paper>
      <Box
        sx={{ height: "97vh" }}
        width={{ xs: "250px", sm: "275px" }}
        onClick={() => dispatch(toggleDrawerAction(false))}
        onKeyDown={() => dispatch(toggleDrawerAction(false))}
      >
        <h1>Hello World</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque
          voluptatibus nemo maiores pariatur? Iusto minus voluptas illum facere
          tempore beatae vitae? Qui blanditiis doloribus necessitatibus
          exercitationem eveniet. Veniam, dolores?
        </div>
      </Box>
    </Paper>
  );
};

export default AppNavigationDrawer;
