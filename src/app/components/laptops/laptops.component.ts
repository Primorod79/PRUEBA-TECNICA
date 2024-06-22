import { Component } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {
  listLaptops: any[] = [
    {Marca: 'Dell',Color: 'Blanco', Referencia:'1J2',Tamano:'12"', Almacenamiento:'128GB', Ram:'12GB',Procesador: 'Intel',Precio: '100.000'},
    {Marca: 'Dell',Color: 'Blanco', Referencia:'1J2',Tamano:'12"', Almacenamiento:'128GB', Ram:'12GB',Procesador: 'Intel',Precio: '100.000'}
  ];
  

}
