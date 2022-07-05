import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";
import ExternalLink from "metabase/core/components/ExternalLink";
import { breakpointMinLarge } from "metabase/styled-components/theme";

// ellucian - updated border color from 'focus' to 'text-medium'
export const CardRoot = styled(ExternalLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${color("text-medium")};
  border-radius: 0.5rem;

  ${breakpointMinLarge} {
    padding: 1.5rem;
  }
`;
// ellucian - updated Icon colors from 'text-dark' to 'text-medium'
export const CardIcon = styled(Icon)`
  display: block;
  flex: 0 0 auto;
  color: ${color("text-medium")};
  width: 1rem;
  height: 1rem;
`;

export const CardTitle = styled.div`
  color: ${color("text-dark")};
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
`;

// start - ellucian - Documentation and Help Icon in Sidebar and MainNavbar
export const HelpIcon = styled(ExternalLink)`
  flex: 0 0 auto;
`;
//   color: ${color("text-medium")};
// `;
// end - ellucian - Documentation and Help Icon in Sidebar and MainNavbar
