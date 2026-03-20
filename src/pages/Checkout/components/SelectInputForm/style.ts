import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectTrigger = styled(Select.Trigger)`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  background-color: ${props => props.theme["base-input"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${props => props.theme["base-text"]};

  &::placeholder{
    color: ${props => props.theme["base-label"]};

}

`;

export const SelectContent = styled(Select.Content)`
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  max-height: 300px;
`;

export const SelectItem = styled(Select.Item)`
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${props => props.theme["base-text"]};

  &:hover {
    background: #f0f0f0;
  }
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
`;