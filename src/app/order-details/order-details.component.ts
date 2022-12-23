import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  orderDetails:any;
  orderID!:number;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.orderID=route.snapshot.params['orderID'];
  }
  ngOnInit():void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.orderID).subscribe({
      next : (data)=>{
        this.orderDetails=data;
      },
      error : (err)=>{}
    });
  }
}
