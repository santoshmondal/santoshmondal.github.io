import { useSelector } from "react-redux";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";

export const IndexPage = () => {
  const appState = useSelector((state) => state);

  return (
    <div className="beautify">
      <div>{appState.title}</div>
      <div>{appState.message}</div>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};
