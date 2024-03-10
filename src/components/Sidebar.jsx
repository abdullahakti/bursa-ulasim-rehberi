import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TerminalArama from "./TerminalArama";

const Sidebar = () => {
  return (
    <>
      <DirectionsBusIcon />

      <Tabs
      defaultActiveKey="terminaller"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="terminaller" title="Terminaller">
        <TerminalArama />
      </Tab>
      <Tab eventKey="OtobusDuraklari" title="Otobüs Durakları">
        Tab content for OtobusDuraklari
      </Tab>
      <Tab eventKey="MetroIstasyonlari" title="Metro İstasyonları">
        Tab content for Metro İstasyonları
      </Tab>
      <Tab eventKey="BBBusIstasyonlari" title="BBBus İstasyonlari">
        Tab content for Metro İstasyonları
      </Tab>
      <Tab eventKey="BudoTerminalleri" title="BUDO Terminalleri">
        Tab content for Metro İstasyonları
      </Tab>
    </Tabs>

    </>
  );
};

export default Sidebar;
