import { faker } from '@faker-js/faker'
import { Mapable } from './CustomMap'


export class Company implements Mapable {

   name: string
   catchPhrase: string
   location: {
      lat: number,
      lng: number,

   }

   constructor() {
      this.name = faker.company.name()
      this.catchPhrase = faker.company.catchPhrase()
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude()),

      }
   }

   markerContent(): string {
      return `<p>Company Name: ${this.name}.</p>  
      <p>Company catch phrases: "${this.catchPhrase}" </p>`
   }
}