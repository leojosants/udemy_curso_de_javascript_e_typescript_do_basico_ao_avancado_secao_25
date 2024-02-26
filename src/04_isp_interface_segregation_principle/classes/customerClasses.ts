/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol
} from "../interfaces/CustomerProtocol";

/* - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - */
export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  public firstName: string;
  public lastName: string;
  public cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `Nome completo: ${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return `CPF: ${this.cpf}`;
  }
}

export class EntrepriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  public name: string;
  public cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return `Nome: ${this.name}`;
  }

  getIDN(): string {
    return `CNPJ: ${this.cnpj}`;
  }
}
