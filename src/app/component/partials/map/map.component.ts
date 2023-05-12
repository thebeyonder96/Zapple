import { Component, ElementRef, ViewChild } from '@angular/core';
import { LatLngTuple, Map, map, tileLayer } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('map', { static: true })
  mapRef!: ElementRef;

  private readonly defualtLatLang: LatLngTuple = [13.75, 21.62];

  map!: Map;

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    if (this.map) return;

    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false,
    }).setView(this.defualtLatLang, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }
}
