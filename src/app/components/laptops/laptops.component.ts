import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {
  form: FormGroup;

  listLaptops: any[] = [
    {Brand: 'Dell',Color: 'Blanco', Reference:'1J2',Size:'12"', Storage:'128GB', Ram:'12GB',Processor: 'Intel',Price: '100.000'},
    {Brand: 'Dell',Color: 'Blanco', Reference:'1J2',Size:'12"', Storage:'128GB', Ram:'12GB',Processor: 'Intel',Price: '100.000'}
  ];

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      Brand: [''],
      Color: [''],
      Reference: [''],
      Size: [''],
      Storage: [''],
      Ram: [''],
      Processor: [''],
      Price: [''],

    })
  }


  ngOnInit(): void{

  }
  
    addlaptop(){
      console.log(this.form);

      const laptop: any = {
        Brand: this.form.get('Brand')?.value,
        Color: this.form.get('Color')?.value,
        Reference: this.form.get('Reference')?.value,
        Size: this.form.get('Size')?.value,
        Storage: this.form.get('Storage')?.value,
        Ram: this.form.get('Ram')?.value,
        Processor: this.form.get('Processor')?.value,
        Price: this.form.get('Price')?.value,
      }
      this.listLaptops.push(laptop)
      this.form.reset();
    }

}
