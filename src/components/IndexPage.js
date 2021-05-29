import { useSelector } from "react-redux";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";
import { Box, Icon } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";

export const IndexPage = () => {
  const appState = useSelector((state) => state);

  return (
    <div className="beautify">
      <Box mb>
        <Alert severity="info">{appState.title}</Alert>
      </Box>
      <Box mb>
        <Alert severity="success">{appState.message}</Alert>
      </Box>

      <Button variant="outlined" size="large" endIcon={<SendIcon />}>
        Check Out
      </Button>
    </div>
  );
};
