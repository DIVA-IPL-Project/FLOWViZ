import * as React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./toolNode.css";

export default function Selector(props) {
  const [selectedVal, setSelectedVal] = React.useState("");

  const id = props.id;
  const labelId = `${id}-label`;
  const collection = props.collection;
  const label = props.label;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;

  const canMultiply = props.canMultiply;
  const multFlag = canMultiply && canMultiply === true;
  const selectorWidth = multFlag ? 12 : 16;

  const onChange = (event) => {
    const val = event.target.value;
    setSelectedVal(val);
  };

  return collection && collection.length > 0 ? (
    <>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Grid container columns={16}>
        <Grid item xs={selectorWidth}>
          <Select
            fullWidth
            labelId={labelId}
            id={id}
            value={selectedVal}
            onChange={onChange}
            label={label}
          >
            {collection.map((elem) => {
              return (
                <MenuItem key={elem} value={elem}>
                  {elem}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        {multFlag ? (
          <Grid item alignSelf="center" xs={4}>
            <IconButton id={id} onClick={onRemove}>
              <RemoveIcon />
            </IconButton>
            <IconButton id={id} onClick={onAdd}>
              <AddIcon />
            </IconButton>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  ) : (
    <></>
  );
}