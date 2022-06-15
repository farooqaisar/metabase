import React from "react";

import { SidebarButtonRoot, SidebarIcon } from "./SidebarButton.styled";

interface SidebarButtonProps {
  isSidebarOpen: boolean;
  onClick: () => void;
}

function SidebarButton({ isSidebarOpen, onClick }: SidebarButtonProps) {
  return (
    <SidebarButtonRoot onClick={onClick} data-testid="sidebar-toggle-button">
      <SidebarIcon
        size={28}
        // ellucian - added open-close variable to change colors of open-close icons
        isSidebarOpen={isSidebarOpen}
        name={isSidebarOpen ? "sidebar_open" : "sidebar_closed"}
      />
    </SidebarButtonRoot>
  );
}

export default SidebarButton;
