import { useState } from "react";
import Select from "react-select";

export function getIndustryList(rowData) {
  let allIndustry = [];
  let IndustryList = [{ value: "", label: "" }];
  rowData.map((company) => {
    allIndustry.push(company.industry);
  });
  allIndustry.push("All");
  let uniqueIn = [...new Set(allIndustry)].sort();
  uniqueIn.map((industry) => {
    IndustryList.push({ value: industry, label: industry });
  });
  return IndustryList;
}

export default function SelectionBar(props) {
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <Select
      isSearchable={false}
      options={props.options}
      value={props.onSubmit(innerSearch)}
      onChange={(x) => {
        setInnerSearch(x.value);
      }}
    />
  );
}
