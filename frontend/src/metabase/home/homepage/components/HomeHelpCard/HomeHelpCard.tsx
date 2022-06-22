import React from "react";
import { t } from "ttag";
import { CardIcon, CardRoot, CardTitle } from "./HomeHelpCard.styled";
import { Icon } from "@ellucian/ds-icons/lib";

const HomeHelpCard = (): JSX.Element => {
  // start - ellucian - Link to Ellucian Documentation
  return (
    // <CardRoot href="https://www.metabase.com/learn/">
    <CardRoot href="https://resources.elluciancloud.com/bundle/ellucian_insights_lrn_getstarted/page/c_about_insights.html">
      <CardIcon name="help_filled" size={24} />
      <CardTitle>{t`Documentation & Help`}</CardTitle>
      {/* <CardTitle>{t`Metabase tips`}</CardTitle> */}
    </CardRoot>
  );
  // end - ellucian - Link to Ellucian Documentation
};

export default HomeHelpCard;
