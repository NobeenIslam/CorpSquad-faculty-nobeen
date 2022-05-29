export interface ProjectInterface {
  id: string;
  clientId: string;
  employeeIds: string[];
  contract: ContractInterface;
}

export interface ContractInterface {
  startDate: string;
  endDate: string;
  size: number;
}
