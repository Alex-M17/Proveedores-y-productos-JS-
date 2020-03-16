import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';


const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: 'proveedor', component: ProveedorComponent},
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
