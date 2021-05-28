import { useSelector } from "react-redux";
import "./IndexPage.css";

export const IndexPage = () => {
  const appState = useSelector((state) => state);

  return (
    <div className="beautify">
      <div>{appState.title}</div>
      <div>{appState.message}</div>
    </div>
  );
};
