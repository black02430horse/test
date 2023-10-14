import React from "react";
import { DetailContainer } from "../../containers";
import { withLayout } from "../../components/common/Layout";

export const DetailPage: React.FC = withLayout(
  () => <DetailContainer />
)