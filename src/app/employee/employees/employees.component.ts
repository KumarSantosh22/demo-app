import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { MsgService } from 'src/app/shared/services/msg.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  gridData: any[] = [];
  product: any = {};
  activeIndex: number = 0;
  aditGuid: string = '';
  aditId: number = 0;
  type: string = 'profile';
  displayAditForm: boolean = false;
  loader: boolean = false;
  selectedColumns: any[] = [];

  cols: any[] = [
    { field: 'id', header: 'Id', filterType: 'number' },
    { field: 'title', header: 'Name', filterType: 'text' },
    { field: 'description', header: 'Description', filterType: 'text' },
    { field: 'price', header: 'Price', type: 'date', filterType: 'number' },
    { field: 'discountPercentage', header: 'Discount Percentage', filterType: 'text' },
    { field: 'rating', header: 'Rating', filterType: 'number' },
    { field: 'stock', header: 'Permanent Address', filterType: 'text' },
    { field: 'brand', header: 'Brand', filterType: 'text' },
    { field: 'category', header: 'Category', filterType: 'text' },
    { field: 'thumbnail', header: 'Image', filterType: 'text' },
  ];

  selectedFields = ['id', 'title', 'price', 'rating']

  filters = [
    { field: 'title', header: 'Title', filterType: 'text', options: [] },
    { field: 'category', header: 'Category', filterType: 'multiselect', options: [] },
    { field: 'category', header: 'Category', filterType: 'dropdown', options: [] },
    { field: 'category', header: 'Category', filterType: 'tag', options: [] },
    { field: 'category', header: 'Category', filterType: 'radio', options: [] },
    { field: 'price', header: 'Price', filterType: 'numeric', options: [] },
  ];
  constructor(
    private http: HttpService,
    private msg: MsgService,
  ) {
    this.selectedColumns = this.cols.filter(c => this.selectedFields.includes(c.field));
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loader = true;
    this.http.get('https://dummyjson.com/products').subscribe(
      res => {
      this.gridData = <any[]>res.products;
      this.parseData();
      this.loader = false;
    },
      err => {
        this.loader = false;
        this.msg.error('Some error occurred!')
      }
    );
  };

  parseData() {
    this.gridData.forEach(x => {
      x.actions = [];
      x.actions.push(
        {
          action: 'edit',
          id: x.id,
          icon: 'fa fa-edit btn-link',
          title: x.title,
        }
      );
    });
  };

  onAction(data: any) {
    console.log(data);
    if (data.action === 'add') {
      this.aditId = 0;
      this.displayAditForm = true;
    }
    if (data.action === 'edit') {
      this.aditId = data.id;
      this.displayAditForm = true;
    }
  };

  onGridSelection(item: any) {
    if (item.data) {
      const data = item.data;
      console.log(item);
      this.activeIndex = 0;
      this.aditGuid = data.guid;
      this.product = data;
    }
  };

  closeForm(event: any) {
    this.displayAditForm = false;
    if (event) {
      this.loadData();
    }
  };

  cancel() {
    this.displayAditForm = false;
  }; 
}
