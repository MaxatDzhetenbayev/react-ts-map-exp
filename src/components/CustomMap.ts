export interface Mapable {
   location: {
      lat: number,
      lng: number
   }
   markerContent(): string
}

export class CustomMap {

   private map: google.maps.Map





   constructor(mapDiv: any) {
      console.log(mapDiv.current)
      this.map = new google.maps.Map(mapDiv.current, {
         zoom: 1,
         center: {
            lat: 0,
            lng: 0,
         }
      })
   }

   addMarker(mapable: Mapable): void {
      const marker = new google.maps.Marker({
         map: this.map,
         position: {
            lat: mapable.location.lat,
            lng: mapable.location.lng
         }

      })

      marker.addListener('click', (): void => {
         const infoWindow = new google.maps.InfoWindow({
            content: mapable.markerContent()
         })
         infoWindow.open(this.map, marker)
      })
   }

}