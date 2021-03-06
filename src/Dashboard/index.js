import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./priceGrid";
import CoinSpotlight from "./coinSpotlight";
import styled from "styled-components";
import PriceChart from "./PriceChart";

const ChardGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;

export default function() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChardGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChardGrid>
    </Page>
  );
}
