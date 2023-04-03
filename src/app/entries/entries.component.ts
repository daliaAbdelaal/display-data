import { Component, OnInit , ViewChild} from '@angular/core';
import { EnteryService } from '../entery.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {



  constructor(private _EnteryService:EnteryService) { }

  enteries:any[]=[];
  displayedColumns = ['number', 'name', 'url'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this._EnteryService.getEntery().subscribe((data)=>{
      console.log(data.pokemon_entries.slice(0,152))
      this.enteries=data.pokemon_entries.slice(0,152);
      this.dataSource=new MatTableDataSource(this.enteries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
