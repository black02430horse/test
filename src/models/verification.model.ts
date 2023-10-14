export interface VerificationModel{
  no: number,
  DID: string,
  verificationFlowName: string,
  verificationflow: string,
  createdAt: Date,
  deletedAt: Date | null,
  updatedAt: Date | null,
  accessCount: number
}