import { IconButton } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useDispatch } from "react-redux";

import { toggleDrawerAction } from "../store/apputil.slice";

const ToolbarContent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <IconButton
        edge="start"
        aria-label="open drawer"
        onClick={() => dispatch(toggleDrawerAction(true))}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default ToolbarContent;
