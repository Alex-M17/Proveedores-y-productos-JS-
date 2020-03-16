import { Component } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import Swal from 'sweetalert2';
import { formatDate, DatePipe, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {

  ProveedorArray: Proveedor[] = [
    {id: 1, name: "Induveca", dir: "C. Duverge no. 127", tel: "8095582538"},
    {id: 2, name: "Induveca", dir: "C. Duverge no. 357", tel: "8095582090"},
    {id: 3, name: "Panaderia", dir: "C. Duverge no. 100", tel: "8095586030"}
  ];

  selectedProveedor: Proveedor = new Proveedor();
  btnCheck: boolean = false;

  Drop(Proveedor: Proveedor){
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.ProveedorArray.forEach( (item, index) => {
          if(item === Proveedor) this.ProveedorArray.splice(index,1);
        });

        Swal.fire(
          'Borrado!',
          'El contacto ha sido borrado con exito.',
          'success'
        )
      }
    })
  }

  DropAll(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se eliminaran todos los contactos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.ProveedorArray.forEach(element => {
          this.ProveedorArray.pop();
        });
        this.ProveedorArray.pop();

        Swal.fire(
          'Contactos eliminados!',
          'Los contactos han sido borrados con exito.',
          'success'
        )
      }
    })
  }

  OpenEdit(Proveedor: Proveedor){
    this.selectedProveedor = Proveedor;
  }

  AddOrEdit(){
    var input:any = document.getElementsByClassName('form-control');
  
    var nombre = input[0].value;
    var correo = input[1].value;
    var pais = input[2].value;  

    if(nombre === ""){
      input[0].style.boxShadow = "0 0 0 1px rgba(255, 0, 0, 0.61)";
    } else{
      input[0].style.boxShadow = "0 0 0";
    }
    if(correo === ""){
      input[1].style.boxShadow = "0 0 0 1px rgba(255, 0, 0, 0.61)";
    } else{
      input[1].style.boxShadow = "0 0 0";
    }
    if(pais === ""){
      input[2].style.boxShadow = "0 0 0 1px rgba(255, 0, 0, 0.61)";
    } else{
      input[2].style.boxShadow = "0 0 0";
    }

    if(nombre !== "" && correo !== "" && pais !== ""){
      if(this.selectedProveedor.id === 0){
        this.selectedProveedor.id = this.ProveedorArray.length + 1;
        this.ProveedorArray.push(this.selectedProveedor);   
      }

      this.selectedProveedor = new Proveedor();
    } else{
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No deje campos vacios!',
      })
    }
  }

}
