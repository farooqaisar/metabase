import styled from "@emotion/styled";

import Icon from "metabase/components/Icon";

import { color } from "metabase/lib/colors";
import { space } from "metabase/styled-components/theme";

// export const SidebarIcon = styled(Icon)`
//   color: ${color("brand")};
// `;

// start - ellucian - SideBar Open-Close button color changes
export const SidebarIcon = styled(Icon)<{ isSidebarOpen: boolean }>`
  color: ${props =>
    props.isSidebarOpen
      ? color("colorCtaBlueBase")
      : color("colorBrandNeutral500")};
`;
// end - ellucian - SideBar Open-Close button color changes

export const SidebarButtonRoot = styled.button`
  margin-left: ${space(1)};
  margin-top: ${space(1)};
  cursor: pointer;
`;
