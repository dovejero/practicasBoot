import { Component, ViewChild } from '@angular/core';
declare var google;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('googleMap') divMap: any;
  map: any;
  markers: any[];

  constructor() {
    this.markers = [];
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError)
    } else {
      console.log('Navegador inválido con Geolocalización')
    }
  }

  showPosition(position) {
    console.log(position);
    console.log(navigator);
    console.log(this.divMap)

    let propsMap = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    this.map = new google.maps.Map(this.divMap.nativeElement, propsMap)

    let marker = new google.maps.Marker({
      position: propsMap.center,
      map: this.map,
      title: '!!Estamos aquí',
      animation: google.maps.Animation.DROP
    })
    this.markers.push(marker);

    google.maps.event.addListener(this.map, 'click', (event) => {
      let latM = event.latLng.lat()
      let lngM = event.latLng.lng()
      console.log('AA: ', latM, lngM)

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(latM, lngM),
        map: this.map,
      })
      this.markers.push(marker);
    })

    // let input = document.querySelector('inputPlace');
    // console.log(input)
    let input = document.getElementById('inputPlace');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace()

      let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: this.map
      })
      this.map.setCenter(place.geometry.location)
      console.log(place);
    })
  }
  showError(error) {
    console.log('ERROR:', error)
    // error.PERMISSION_DENIED
    // error.POSITION_UNAVAILABLE
    // error.TIMEOUT
    // error.UNKNOWN_ERROR
  }

  eliminarMarkers() {
    this.markers.map(marker => marker.setMap())
    this.markers = []
  }
}
