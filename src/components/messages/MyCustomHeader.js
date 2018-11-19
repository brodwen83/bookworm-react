import React from "react";
import { Header, Icon } from "semantic-ui-react";

const MyCustomHeader = ({ header, subheader, icon }) => (
  <Header as="h2">
    <Icon name={icon} />
    <Header.Content>
      {header}
      <Header.Subheader>{subheader}</Header.Subheader>
    </Header.Content>
  </Header>
);

export default MyCustomHeader;
