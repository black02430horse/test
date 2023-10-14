import React, { useState } from "react";
import { FlowView } from "../../components/view";
import { VerificationModel } from "../../models";

export const FlowContainer: React.FC = () => {
  const [pageNum, setPageNum] = useState<number> (1);
  const verifications: VerificationModel[] = [
    {
      no: 1, 
      DID: "kgh02430", 
      verificationFlowName: "Example-Driving Licence verification",
      verificationflow: "sth",
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
      accessCount: 20
    },
    {
      no: 2, 
      DID: "kgh02430", 
      verificationFlowName: "Human Verification",
      verificationflow: "sth",
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
      accessCount: 8
    },
  ];
  return(
    <FlowView 
      pageNum = {pageNum}
      setPageNum = {setPageNum}
      verifications = {verifications}
    />
  ) 
}