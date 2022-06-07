import * as React from "react";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SettingsAccordion from "./settingsAccordion";

function BaseToolAccordion({ data = {}, onParentUpdate = () => { }, children }) {

  const onPropChange = (event, changePropAction) => {
    const value = event.target.value;
    let mainProp = data;
    changePropAction(value, mainProp);
    {
      () => onParentUpdate(mainProp);
    }
  };

  return (
    <Container sx={{ p: 2 }}>
      <Stack spacing={2}>
        <SettingsAccordion name="General">
          <Stack sx={{ p: 2 }}>
            <TextField
              margin="normal"
              required
              id="name"
              label="Tool name"
              name="name"
              autoComplete="name"
              onChange={(event) => {
                onPropChange(event, (value, mainProp) => {
                  mainProp.general.name = value;
                });
              }}
            />
            <TextField
              margin="normal"
              required
              id="description"
              label="Tool description"
              name="description"
              autoComplete="description"
              onChange={(event) => {
                onPropChange(event, (value, mainProp) => {
                  mainProp.general.description = value;
                });
              }}
            />
          </Stack>
        </SettingsAccordion>

        <SettingsAccordion name="Access">
          <Container sx={{ p: 2 }}>
            <TextField
              margin="normal"
              required
              id="ip"
              label="Host IP"
              name="ip"
              autoComplete="ip"
              onChange={(event) => {
                onPropChange(event, (value, mainProp) => {
                  mainProp.access.address = value;
                });
              }}
            />
            <TextField
              margin="normal"
              id="port"
              label="Host port"
              name="port"
              autoComplete="port"
              onChange={(event) => {
                onPropChange(event, (value, mainProp) => {
                  mainProp.access.port = value;
                });
              }}
            />
          </Container>
        </SettingsAccordion>
        {children}
      </Stack>
    </Container>
  );
}

export default BaseToolAccordion;