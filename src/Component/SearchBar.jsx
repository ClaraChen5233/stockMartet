import { useState } from "react";
import Select from "react-select";

export function getSymbolList(rowData) {
  let defaultOptions = [{ value: "", label: "" }];
  rowData.map((company) => {
    defaultOptions.push({ value: company.symbol, label: company.symbol });
  });
  return defaultOptions;
}

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <Select
      options={props.options}
      onChange={(x) => {
        setInnerSearch(x.value);
      }}
      placeholder="Company Symbol"
      onInputChange={props.onChange(innerSearch)}
    />
  );
}
