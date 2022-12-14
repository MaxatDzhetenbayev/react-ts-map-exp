import { faker } from "@faker-js/faker";
import { Mapable } from "./CustomMap";
export class User implements Mapable {

   name: string;
   location: {
      lng: number,
      lat: number,
   }

   constructor() {
      this.name = faker.name.firstName()
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.latitude()),
      }
   }

   markerContent(): string {
      return `User Name: ${this.name}`
   }
}