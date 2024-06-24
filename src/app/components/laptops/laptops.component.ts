import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LaptopService } from '../../services/laptop.service';


@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {
  listLaptops: any[] = [];
  action = 'Create ';
  form: FormGroup;
  id: number | undefined;

  

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _laptopsService: LaptopService){
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
    this.obteinlaptops();

  }
    obteinlaptops(){
      this._laptopsService.getListlaptops().subscribe(data => {
        console.log(data);
        this.listLaptops = data;
      }, error =>{
        console.log(error);
      })
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
      
      if(this.id == undefined){
        this._laptopsService.savelaptop(laptop).subscribe(data=>{
          this.toastr.success('The Laptop was successfully created!','Laptop created!');
          this.obteinlaptops();
          this.form.reset();
        }, error =>{
          this,this.toastr.error('Opss.. an error occurred','Error')
          console.log(error);
        })
      }else{
        laptop.id = this.id;
        this._laptopsService.updatelaptop(this.id,laptop).subscribe(data =>{
          this.form.reset();
          this.action = ' Create ';
          this.id = undefined;
          this.toastr.info(" The laptop was updated!.", "Laptop updated");
          this.obteinlaptops();

        },error => {
          console.log(error);
        })

      }

      
     
    }

    deletelaptop(id: number){
      this._laptopsService.deletelaptop(id).subscribe(data =>{
      this.toastr.error('The laptop was successfully deleted!','Laptop deleted');
      this.obteinlaptops();
      }, error => {
        console.log(error);
      }
    )
      
    }

    editlaptop(laptop: any){
      this.action= 'Edit';
      this.id = laptop.id;

      this.form.patchValue({
        Brand: laptop.Brand,
        Color: laptop.Color,
        Reference: laptop.Reference,
        Size: laptop.Size,
        Storage: laptop.Size,
        Ram: laptop.Ram,
        Processor: laptop.Processor,
        Price: laptop.Price

      })
    }






}
