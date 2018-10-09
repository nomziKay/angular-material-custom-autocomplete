export class Supplier {

  id: number;

  name: string;

  city: string;

  reference: string;

  constructor(name: string, city: string, reference: string) {
    this.name = name;
    this.city = city;
    this.reference = reference;
  }

}
