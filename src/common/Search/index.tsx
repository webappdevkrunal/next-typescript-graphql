import React from "react";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ISearchComponentProps } from "../type";

const { Search } = Input;

const SearchComponent: React.FC<ISearchComponentProps> = ({
  size = "small",
  allowClear = false,
  placeholder = "",
  searchValue = "",
  onSearch,
  onChange
}) => {
  return (
    <Search
      defaultValue={searchValue}
      size={size as SizeType}
      placeholder={placeholder}
      allowClear={allowClear}
      onSearch={onSearch}
      onChange={onChange}
      style={{ width: 400 }}
    />
  );
};

export default SearchComponent;
