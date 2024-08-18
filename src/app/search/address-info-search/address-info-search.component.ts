import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'mf-address-info-search',
  templateUrl: './address-info-search.component.html',
  styleUrls: ['./address-info-search.component.scss']
})
export class AddressInfoSearchComponent implements OnInit {

  // searchQuery: string = '';
  // addresses: any[] = [];
  // filteredAddresses: any[] = [];

  // constructor(private searchService: SearchService) {}

  // // ngOnInit(): void {
  //   this.searchService.getAddresses().subscribe(data => {
  //     this.addresses = data;
  //   });
  // }

  // onSearch(): void {
  //   if (this.searchQuery.trim() === '') {
  //     this.filteredAddresses = [];
  //   } else {
  //     this.filteredAddresses = this.addresses.filter(address =>
  //       Object.values(address).some((val:any) =>
  //         val.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
  //       )
  //     );
  //   }
  // }

  searchQuery: string = '';
  addresses: any[] = [];
  filteredAddresses: any[] = [];
  selectedAddress: any = null;
  images!: any[];
  image = "images/galleria4.jpg";

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private searchService: SearchService,
    private imageService: ImageService) {}

  ngOnInit(): void {
    this.searchService.getAddresses().subscribe(data => {
      this.addresses = data;
      this.filteredAddresses = data; // Display all addresses initially
    });
  }

  onSearch(): void {
    console.log(this.searchQuery);
    if (this.searchQuery.trim() === '') {
      this.filteredAddresses = this.addresses;
    } else {
      this.filteredAddresses = this.addresses.filter(address =>
        Object.values(address).some((val:any) =>
          val.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
      this.imageService.getImages().subscribe(images => 
        { 
          console.log(images);
          this.images = images
        });
    }
    console.log(JSON.stringify(this.filteredAddresses));
  }

  onSelectAddress(event: any): void {
    this.selectedAddress = event.value;
  }

}
