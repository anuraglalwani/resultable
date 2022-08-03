import React from "react";
import FieldData from "../FieldData/FieldData";
import SearchInput from "../SearchInput/SearchInput";
import "./Map.scss";
import ConnectIcon from "../ConnectIcon/ConnectIcon";


function Map() {
  return (
    <div className="map">
      {<FieldData title="Product" head disable={true} />}
      <div className="fields">
        <div className="field-row0">
          <FieldData title="Title" disable={true} />
          <div className="right">
            <FieldData title="Micromax" disable={false} />
            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
        <FieldData title="Search_alias" disable={true} />
        <div className="field-row0">
          <FieldData title="Title" disable={true} />
          <div className="right">
            <FieldData title="Electronics" disable={true} />
            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
        <div className="field-row0">
          <FieldData title="Value" disable={true} />
          <div className="right">
            <FieldData title="Electronics" disable={true} />
            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
      </div>
      {<FieldData title="Keywords" head={true} disable={true} />}
      <div className="fields">
        <div className="field-row0">
          <FieldData title="Title" disable={true} />

          <div className="right">
            <FieldData title="Type here" disable={false} />
            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
        <FieldData title="Search_alias" disable={true} />
        <div className="field-row0">
          <FieldData title="Title" disable={true} />

          <div className="right">
            <FieldData title="Electronics" disable={true} />

            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
        <div className="field-row0">
          <FieldData title="Value" disable={true} />

          <div className="right">
            <FieldData title="Electronics" disable={true} />
            <ConnectIcon />
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
