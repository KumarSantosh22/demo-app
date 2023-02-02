import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-adit-product',
  templateUrl: './adit-product.component.html',
  styleUrls: ['./adit-product.component.scss']
})
export class AditProductComponent implements OnInit,OnChanges {
  @Input() aditId: number = 0;
  @Output() saveOrExit = new EventEmitter();
  model: any = {};

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.aditId) {
      this.loadData();
    }
    else {
      this.model = {};
    }
  }

  loadData() {
    this.http.get(`https://dummyjson.com/products/${this.aditId}`).subscribe(res => {
      this.model = res;
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // this.msg.warning('Please fill all details')
      return;
    }
    this.http.post('https://dummyjson.com/products/add', this.model).subscribe(res => {
      console.log(res);
      console.log(this.model);
      // this.msg.success('Successfully Saved')
      this.saveOrExit.emit(true);
    })
  }

  cancel() {
    this.saveOrExit.emit(false);
  }
}


