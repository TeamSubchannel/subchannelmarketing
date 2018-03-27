import React from "react";
import {
  SmallText,
  Title1,
  Title2,
  Title3,
  PlanContainer,
  Button
} from "../../theme/theme";
import styled from "styled-components";

const PlanDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: inherit;
  border: 1px solid #fff;
  &:hover {
    background-color: #fff;
    color: #dd694a;
    border: none;
    box-shadow: none;
  }
`;

const ProPlan = () => (
  <PlanContainer backgroundcolor="#DD694A">
    <PlanDiv>
      <Title1 color="#fff" margin=".5em 0 .2em 0">
        PRO
      </Title1>
      <SmallText
        color="#fff"
        margin="0 0 16px 0"
        width="100%"
        fontsizemobile="0.7em"
      >
        Distribute like a boss
      </SmallText>
      <Title3 color="#fff" margin=".7em 0 .2em 0">
        $99/m
      </Title3>
      <SmallText color="#fff" margin="0 0 2.5em 0" fontsizemobile="0.7em" plans>
        + .99 per user
      </SmallText>
    </PlanDiv>
    <StyledButton>START</StyledButton>
    <PlanDiv>
      <SmallText color="#fff" margin=".6em 0" fontsizemobile="0.7em">
        + Studio Software
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Customer Support
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Meaningful Insights
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Technical Ticketing
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Advertising Management
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Content Distribution Tools
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        File Management Tools
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Monetization Options
      </SmallText>
      <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
        Up to 1,000 subscribers
      </SmallText>
    </PlanDiv>
  </PlanContainer>
);

export default ProPlan;
