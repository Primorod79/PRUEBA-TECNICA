import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private fb: FormBuilder,
    private toastr: ToastrService){
    this.form = this.fb.group({
      Brand: ['', Validators.required],
      Color: ['',Validators.required],
      Reference: ['',Validators.required],
      Size: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(1)]],
      Storage: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(1)]],
      Ram: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(1)]],
      Processor: ['',Validators.required],
      Price: ['',[Validators.required, Validators.maxLength(12), Validators.minLength(1)]],

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
      this.toastr.success('The Laptop was successfully created!','Laptop created!');
      this.form.reset();
    }

    deletelaptop(index: number){
      this.listLaptops.splice(index, 1);
      this.toastr.error('The laptop was successfully deleted!','Laptop deleted');
    }




}
