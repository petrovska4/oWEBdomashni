import { Component, Input, OnInit } from '@angular/core';
import { Driver } from '../module/klasa';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {

  @Input()
  ime: String = "";

  @Input()
  vozac: Driver = {} as Driver;

  ngOnInit(): void {
      
  }

}
