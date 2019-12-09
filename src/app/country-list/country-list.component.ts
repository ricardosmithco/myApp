import { Component } from "@angular/core";

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.css'],
    exportAs: 'countrylist'
})

export class CountryListComponent{

    countries: any[] =[
        {countryId: 1, countryName: 'Trinidad & Tobago'},
        {countryId: 2, countryName: 'Jamaica'},
        {countryId: 3, countryName: 'Antigua'},
        {countryId: 4, countryName: 'St. Kitts'}
    ];

    
    country: any[];
    
    changeCountry(name: string){
        this.country = [];
        for(let i=0; i<this.countries.length; i++){
            if(this.countries[i].countryName === name){
                this.country.push(this.countries[i]);
            }
        }
    }
}