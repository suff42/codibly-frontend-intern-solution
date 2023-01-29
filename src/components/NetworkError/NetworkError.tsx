import React from "react";
import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import { NetworkErrorI } from "./NetworkError.types";

const NetworkError: React.FC<NetworkErrorI> = ({ statusCode }) => {
  return (
    <Alert sx={{ minWidth: "400px" }} severity="error">
      <AlertTitle>Error</AlertTitle>
      Request status code: <strong>{statusCode}</strong>
    </Alert>
  );
};

export default NetworkError;
