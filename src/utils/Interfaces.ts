export interface ProjectInterface {
  id: string;
  clientId: string;
  employeeIds: string[];
  contract: ContractInterface;
}

export interface ProjectInterfaceWithClientName {
  id: string;
  clientId: string;
  clientName: string;
  employeeIds: string[];
  contract: ContractInterface;
}

export interface ProjectInterfaceWithAllData {
  employees: EmployeeInterface[];
  id: string;
  clientId: string;
  clientName: string;
  employeeIds: string[];
  contract: ContractInterface;
}

export interface ContractInterface {
  startDate: string;
  endDate: string;
  size: string;
}

export interface EmployeeInterface {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlankEmployeeInterface {
  id: "Employee Not Found";
  name: "Employee Not Found";
  role: "Employee Not Found";
  avatar: "";
}

export interface ClientInterface {
  id: string;
  name: string;
}
