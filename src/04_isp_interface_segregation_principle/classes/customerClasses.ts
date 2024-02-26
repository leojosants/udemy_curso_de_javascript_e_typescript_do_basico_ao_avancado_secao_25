/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "../interfaces/CustomerProtocol";

/* - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - */
export class IndividualCustomer implements IndividualCustomerProtocol {
  public firstName: string;
  public lastName: string;
  public cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EntrepriseCustomer implements EnterpriseCustomerProtocol {
  public name: string;
  public cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
