import React from "react";
import { withLayout } from "../../components/common/Layout";
import { CreateContainer } from "../../containers";

export const CreatePage: React.FC = withLayout(
  () => <CreateContainer />
)