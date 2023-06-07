import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { MdbTableDirective } from 'mdb-angular-ui-kit/table';

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.scss']
})

// export interface Person {
//   name: string;
//   position: string;
//   office: string;
//   age: number;
//   startDate: string;
//   salary: string;
// }

export class TablecomponentComponent {

  tabledata:any;
  closeicon="../assets/images/close.png";

  heading = [
    {id:1,th:"Cell Heading"},
    {id:2,th:"Cell Heading"},
    {id:3,th:"Cell Heading"},
    {id:4,th:"Cell Heading"},
    {id:5,th:"Cell Heading"}
  ];

  array = [
    {id:1,th:"Cell Heading",td0:"Cell Content",td1:"Tanya",td2:"Sharath",td3:"Cell Content",td4:"Ranjan"},
    {id:2,th:"Cell Heading",td0:"Cell Phone",td1:"Anand",td2:"Cell Content",td3:"Ranjan",td4:"Cell Content"},
    {id:3,th:"Cell Heading",td0:"Lalith",td1:"Gaurav",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
    {id:4,th:"Cell Heading",td0:"Vishnu",td1:"Kumar",td2:"Sharath",td3:"Cell Content",td4:"Cell Content"},
    {id:5,th:"Cell Heading",td0:"Ranjan",td1:"Muskan",td2:"Cell Content",td3:"Sharath",td4:"Cell Content"}
  ];

  copyarray= this.array;

  @ViewChild('myModalClose') modalClose8:any;
  @ViewChild("myheader") elRef: ElementRef;
  @ViewChild('search') search:any;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.tabledata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }
  }

  close(){
    this.modalClose8.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
  }

  Search(){
    console.log("??????????",this.search.nativeElement.value);
    if(this.search.nativeElement.value){
      this.copyarray =[];
      this.array.filter((x:any, i)=>{
        const keys = Object.keys(x);
        keys.map((y:any,j)=>{
            const result:any = {};
            
            for (const key in x) {
            const value = x[key];
              if (!Object.values(result).includes(value)) {
              result[key] = value;
              }
            }
          // console.log(">>>>>",result);
          if(this.search.nativeElement.value == result[y]){
            // console.log(">>>>>",this.copyarray);
            this.copyarray.push(x);
          }
        });
      });
      this.array = this.copyarray;
      console.log("???vvvv",this.array);
    } else {
      this.array = [
        {id:1,th:"Cell Heading",td0:"Cell Content",td1:"Tanya",td2:"Sharath",td3:"Cell Content",td4:"Ranjan"},
        {id:2,th:"Cell Heading",td0:"Cell Phone",td1:"Anand",td2:"Cell Content",td3:"Ranjan",td4:"Cell Content"},
        {id:3,th:"Cell Heading",td0:"Lalith",td1:"Gaurav",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
        {id:4,th:"Cell Heading",td0:"Vishnu",td1:"Kumar",td2:"Sharath",td3:"Cell Content",td4:"Cell Content"},
        {id:5,th:"Cell Heading",td0:"Ranjan",td1:"Muskan",td2:"Cell Content",td3:"Sharath",td4:"Cell Content"}
      ];
    }
  }


  // @ViewChild('table') table!: MdbTableDirective<Person>;

  headers = ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Salary'];

  // dataSource: Person[] = [
  //   {
  //     name: 'Tiger Nixon',
  //     position: 'System Architect',
  //     office: 'Edinburgh',
  //     age: 61,
  //     startDate: '2011/04/25',
  //     salary: '$320,800',
  //   },
  //   {
  //     name: 'Sonya Frost',
  //     position: 'Software Engineer',
  //     office: 'Edinburgh',
  //     age: 23,
  //     startDate: '2008/12/13',
  //     salary: '$103,600',
  //   },
  //   {
  //     name: 'Jena Gaines',
  //     position: 'Office Manager',
  //     office: 'London',
  //     age: 30,
  //     startDate: '2008/12/19',
  //     salary: '$90,560',
  //   },
  //   {
  //     name: 'Quinn Flynn',
  //     position: 'Support Lead',
  //     office: 'Edinburgh',
  //     age: 22,
  //     startDate: '2013/03/03',
  //     salary: '$342,000',
  //   },
  //   {
  //     name: 'Charde Marshall',
  //     position: 'Regional Director',
  //     office: 'San Francisco',
  //     age: 36,
  //     startDate: '2008/10/16',
  //     salary: '$470,600',
  //   },
  //   {
  //     name: 'Haley Kennedy',
  //     position: 'Senior Marketing Designer',
  //     office: 'London',
  //     age: 43,
  //     startDate: '2012/12/18',
  //     salary: '$313,500',
  //   },
  //   {
  //     name: 'Tatyana Fitzpatrick',
  //     position: 'Regional Director',
  //     office: 'London',
  //     age: 19,
  //     startDate: '2010/03/17',
  //     salary: '$385,750',
  //   },
  //   {
  //     name: 'Michael Silva',
  //     position: 'Marketing Designer',
  //     office: 'London',
  //     age: 66,
  //     startDate: '2012/11/27',
  //     salary: '$198,500',
  //   },
  //   {
  //     name: 'Paul Byrd',
  //     position: 'Chief Financial Officer (CFO)',
  //     office: 'New York',
  //     age: 64,
  //     startDate: '2010/06/09',
  //     salary: '$725,000',
  //   },
  //   {
  //     name: 'Gloria Little',
  //     position: 'Systems Administrator',
  //     office: 'New York',
  //     age: 59,
  //     startDate: '2009/04/10',
  //     salary: '$237,500',
  //   },
  //   {
  //     name: 'Garrett Winters',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: 63,
  //     startDate: '2011/07/25',
  //     salary: '$170,750',
  //   },
  //   {
  //     name: 'Ashton Cox',
  //     position: 'Junior Technical Author',
  //     office: 'San Francisco',
  //     age: 66,
  //     startDate: '2009/01/12',
  //     salary: '$86,000',
  //   },
  //   {
  //     name: 'Cedric Kelly',
  //     position: 'Senior Javascript Developer',
  //     office: 'Edinburgh',
  //     age: 22,
  //     startDate: '2012/03/29',
  //     salary: '$433,060',
  //   },
  //   {
  //     name: 'Airi Satou',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: 33,
  //     startDate: '2008/11/28',
  //     salary: '$162,700',
  //   },
  //   {
  //     name: 'Brielle Williamson',
  //     position: 'Integration Specialist',
  //     office: 'New York',
  //     age: 61,
  //     startDate: '2012/12/02',
  //     salary: '$372,000',
  //   },
  // ];

  // search(event: Event): void {
    // const searchTerm = (event.target as HTMLInputElement).value;
    // this.table.search(searchTerm);
  // }

}
