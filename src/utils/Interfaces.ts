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

export interface EmployeeInterface {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ClientInterface {
  id: string;
  name: string;
}
