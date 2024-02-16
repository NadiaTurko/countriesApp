import { ListItem, List } from "@mui/material";

const toCapitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const renderArrayList = (arr) => {
  let list = arr.map((item, index) => (
    <ListItem key={index}>
      {Array.isArray(item)
        ? renderArrayList(item)
        : typeof item === `object`
        ? renderObjectList(item)
        : String(item)}
    </ListItem>
  ));
  return <List>{list}</List>;
};

const renderObjectList = (obj) => {
  let list = Object.keys(obj).map((key, index) => (
    <ListItem key={index}>
      <strong>{toCapitalize(key)}:</strong>{" "}
      {Array.isArray(obj[key])
        ? renderArrayList(obj[key])
        : typeof obj[key] === `object`
        ? renderObjectList(obj[key])
        : String(obj[key])}
    </ListItem>
  ));

  return <List>{list}</List>;
};

export { toCapitalize, renderArrayList, renderObjectList };
