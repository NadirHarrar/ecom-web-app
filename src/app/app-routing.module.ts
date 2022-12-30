import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path : "products",component: ProductsComponent,canActivate:[AuthGuard]
  },
  {
    path : "customers",component: CustomersComponent,canActivate:[AuthGuard]
  },
  {
    path : "fullBill/:customerID",component: OrdersComponent,canActivate:[AuthGuard]
  },
  {
    path : "order-details/:orderID",component: OrderDetailsComponent,canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
