import { Component, OnInit } from '@angular/core';
import { Coords } from '../coordinates';
import { CoordinatesHelperService } from '../coordinates-helper.service';
import { elevate } from '../elevation';
import { ElevationService } from '../elevation.service';
import { AstroUser } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-coordinates-finder',
  templateUrl: './coordinates-finder.component.html',
  styleUrls: ['./coordinates-finder.component.css']
})
export class CoordinatesFinderComponent implements OnInit {
  
  currentUser : AstroUser = {id: 0, name: 'bob', city: 'Akron', state: 'Ohio'}
  locationData : Coords = this.getCoordinates();
  userId: number = 0;
  latitude : number = 0;
  longitude : number = 0;
  userCity : string = this.currentUser.city.toString();
  userState : string = this.currentUser.state.toString();
  altitudeObject : elevate = this.getElevation();
  altitude : number = 0;
  
  constructor(private coords : CoordinatesHelperService, private user : UsersService, private elevation : ElevationService) { }

getUserByID(id : number): AstroUser {
  this.user.getUserById(id).subscribe((response) => {
  this.currentUser = response;
  this.getCoordinates();
  console.log(this.altitudeObject);
});
  return this.currentUser;
}

getElevation() : elevate {
  this.elevation.getElevation().subscribe((response) =>{
  this.altitudeObject = response;
  this.altitude = this.altitudeObject.results[0].elevation;
  });
  return this.altitudeObject;
}

getCoordinates() : Coords{
  this.updateLocation();
  this.coords.GetCoords().subscribe((response) => {
  this.locationData = response;
  this.latitude = this.locationData.locations[0].referencePosition.latitude;
  this.longitude = this.locationData.locations[0].referencePosition.longitude;
  this.elevation.latitude = this.latitude;
  this.elevation.longitude = this.longitude;
  this.getElevation();
  })
  return this.locationData;
}

updateLocation() : void {
  this.coords.userCity = this.currentUser.city.toString();
  this.coords.userState = this.currentUser.state.toString();
}

  ngOnInit(): void {
  }

}
