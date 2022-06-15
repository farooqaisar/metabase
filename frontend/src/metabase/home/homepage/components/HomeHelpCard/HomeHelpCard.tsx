import React from "react";
import { t } from "ttag";
import { CardIcon, CardRoot, CardTitle } from "./HomeHelpCard.styled";

const HomeHelpCard = (): JSX.Element => {
  // start - ellucian - Link to Ellucian Documentation
  return (
    // <CardRoot href="https://www.metabase.com/learn/">
    <CardRoot href="https://resources.elluciancloud.com/">
      <CardIcon name="help" />
      <CardTitle>{t`Documentation & Help`}</CardTitle>
      {/* <CardTitle>{t`Metabase tips`}</CardTitle> */}
    </CardRoot>
  );
  // end - ellucian - Link to Ellucian Documentation
};

export default HomeHelpCard;
