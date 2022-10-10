import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WelcomeSnackbar = () => {
  const { dataStore } = useSelector((state) => state);

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setOpen(true), 2500);
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" icon={false}>
          {dataStore.welcome} &#128516;
        </Alert>
      </Snackbar>
    </>
  );
};

export default WelcomeSnackbar;
