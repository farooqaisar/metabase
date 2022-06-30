import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";
// ellucian - updated the color to "text-medium" from "text-light"
export const TablesDivider = styled.span`
  color: ${color("text-medium")};
  font-size: 1em;
  font-weight: bold;
  padding: 0 0.2em;
  user-select: none;
`;
