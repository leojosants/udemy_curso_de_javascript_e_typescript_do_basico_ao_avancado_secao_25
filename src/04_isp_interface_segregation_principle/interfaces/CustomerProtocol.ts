/* - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - */
export interface CustomerOrder {
  getName(): string;
  getIDN(): string; //identification number
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
