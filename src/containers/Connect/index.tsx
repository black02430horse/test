import React from "react";
import { ConnectView } from "../../components/view";
import { withLayout } from "../../components/common/Layout";

export const ConnectContainer: React.FC = withLayout(
  () => <ConnectView />
)