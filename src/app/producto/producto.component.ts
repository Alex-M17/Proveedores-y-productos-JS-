import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { Proveedor } from '../models/proveedor';
import Swal from 'sweetalert2';
import { formatDate, DatePipe, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productoArray: Producto[] = [
    {id: 1, name: "Salami", desc: "Es Bueno!", fVenc: new Date("9/02/2021"), idProveedor: 1},
    {id: 2, name: "Queso", desc: "Buena Calidad!", fVenc: new Date("8/04/2022"), idProveedor: 2},
    {id: 3, name: "Pan", desc: "Fresco!", fVenc: new Date("02/06/2020"), idProveedor: 3}
  ];

  selectedProducto: Producto = new Producto();
  btnCheck: boolean = false;

  Drop(producto: Producto){
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
        this.productoArray.forEach( (item, index) => {
          if(item === producto) this.productoArray.splice(index,1);
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
        this.productoArray.forEach(element => {
          this.productoArray.pop();
        });
        this.productoArray.pop();

        Swal.fire(
          'Contactos eliminados!',
          'Los contactos han sido borrados con exito.',
          'success'
        )
      }
    })
  }

  OpenEdit(producto: Producto){
    this.selectedProducto = producto;
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
      if(this.selectedProducto.id === 0){
        this.selectedProducto.id = this.productoArray.length + 1;
        this.selectedProducto.idProveedor = this.selectedProducto.id;
        this.productoArray.push(this.selectedProducto);   
      }

      this.selectedProducto = new Producto();
    } else{
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No deje campos vacios!',
      })
    }
  }
}
