import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TerminalArama from "./TerminalArama";
import MetroIstasyonlari from "./MetroIstasyonlari";

const Sidebar = () => {
  return (
    <>
      <Tabs
      defaultActiveKey="terminaller"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="terminaller" title="Terminaller">
        <TerminalArama />
      </Tab>
      <Tab eventKey="MetroIstasyonlari" title="Metro İstasyonları">
        <MetroIstasyonlari />
      </Tab>
    </Tabs>

    </>
  );
};

export default Sidebar;
