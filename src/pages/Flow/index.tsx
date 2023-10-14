import React from "react";
import { FlowContainer } from "../../containers";
import { withLayout } from "../../components/common/Layout";

export const FlowPage: React.FC = withLayout(
  () => <FlowContainer />
)