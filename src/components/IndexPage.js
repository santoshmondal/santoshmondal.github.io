import { useSelector } from "react-redux";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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

      <Button variant="outlined" size="small">
        Check Out
      </Button>
    </div>
  );
};
