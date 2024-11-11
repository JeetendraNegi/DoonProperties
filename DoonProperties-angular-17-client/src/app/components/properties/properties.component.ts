import { Component, OnInit } from '@angular/core';
import { PropertyDetailsService } from 'app/services/properties/property-details.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor(private propertyService: PropertyDetailsService) {
    this.getProperties();
   }

  ngOnInit(): void {
  }

  private getProperties() {
    this.propertyService.getPropertyDetails().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => alert('An error occurred while fetching properties' + err)
    });
  }

}
