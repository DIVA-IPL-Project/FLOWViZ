import { Container, Stack, TextField, Typography } from "@mui/material";
import * as React from "react";
import { validateInputs } from "./util";

export default function Access({
  onAccessUpdate = () => {},
  setCanAdvance = () => {},
  address,
  port,
}) {
  const requiredFields = [address];

  React.useEffect(() => {
    validateInputs(requiredFields, setCanAdvance, onAccessUpdate, {
      address: address,
      port: port,
    });
  }, requiredFields);

  return (
    <Container sx={{ p: 2 }}>
      <Stack sx={{ p: 2 }}>
        <Typography variant="h5">Access</Typography>
        <TextField
          margin="normal"
          required
          id="address"
          label="Tool address"
          name="address"
          autoComplete="address"
          defaultValue={address}
          onChange={(event) =>
            onAccessUpdate({
              address: event.target.value,
              port: port,
            })
          }
        />
        <TextField
          margin="normal"
          id="port"
          label="Tool port"
          name="port"
          autoComplete="port"
          defaultValue={port}
          onChange={(event) =>
            onAccessUpdate({
              address: address,
              port: event.target.value,
            })
          }
        />
      </Stack>
    </Container>
  );
}