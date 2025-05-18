import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [ MatCardModule, MatIcon, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements AfterViewInit {
  eventLogDisplayedColumns: string[] = ['datetime', 'customer', 'product', 'quantity', 'amount'];
  eventLogDataSource: MatTableDataSource<EventLog>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const EVENT_LOG_DATA: EventLog[] = [
      new EventLog('2023-10-01 10:00:00', 'John Doe', 'Laptop', 1, 1200),
      new EventLog('2023-10-01 11:00:00', 'Jane Smith', 'Smartphone', 2, 800),
      new EventLog('2023-10-01 12:00:00', 'Alice Johnson', 'Headphones', 3, 150),
      new EventLog('2023-10-01 13:00:00', 'Bob Brown', 'Smartwatch', 1, 300),
      new EventLog('2023-10-01 14:00:00', 'Charlie Davis', 'Tablet', 2, 600),
      new EventLog('2023-10-01 15:00:00', 'David Wilson', 'Monitor', 1, 400),
      new EventLog('2023-10-01 16:00:00', 'Eva Garcia', 'Keyboard', 5, 100),
      new EventLog('2023-10-01 17:00:00', 'Frank Martinez', 'Mouse', 3, 60),
      new EventLog('2023-10-01 18:00:00', 'Grace Lee', 'Printer', 1, 200),
      new EventLog('2023-10-01 19:00:00', 'Henry Walker', 'Router', 1, 150),
      new EventLog('2023-10-01 20:00:00', 'Isabella Hall', 'Speaker', 2, 250),
      new EventLog('2023-10-01 21:00:00', 'Jack Young', 'Webcam', 1, 120),
      new EventLog('2023-10-01 22:00:00', 'Liam King', 'Microphone', 1, 80),
      new EventLog('2023-10-01 23:00:00', 'Mia Wright', 'External Hard Drive', 1, 150),
      new EventLog('2023-10-01 24:00:00', 'Noah Scott', 'USB Flash Drive', 5, 50),
      new EventLog('2023-10-01 25:00:00', 'Olivia Green', 'Graphics Card', 1, 500),
      new EventLog('2023-10-01 26:00:00', 'Sophia Adams', 'Motherboard', 1, 200),
      new EventLog('2023-10-01 27:00:00', 'James Baker', 'Power Supply', 1, 100),
      new EventLog('2023-10-01 28:00:00', 'Ava Gonzalez', 'Cooling Fan', 2, 40),
      new EventLog('2023-10-01 29:00:00', 'William Nelson', 'Case', 1, 80),
      new EventLog('2023-10-01 30:00:00', 'Benjamin Carter', 'SSD', 1, 200),
      new EventLog('2023-10-01 31:00:00', 'Lucas Mitchell', 'HDD', 1, 100),
      new EventLog('2023-10-01 32:00:00', 'Charlotte Perez', 'RAM', 2, 150),
      new EventLog('2023-10-01 33:00:00', 'Amelia Roberts', 'Laptop Stand', 1, 30),
      new EventLog('2023-10-01 34:00:00', 'Evelyn Turner', 'Mouse Pad', 3, 20),
      new EventLog('2023-10-01 35:00:00', 'Harper Phillips', 'Webcam Stand', 1, 25),
      new EventLog('2023-10-01 36:00:00', 'Ella Campbell', 'Laptop Bag', 1, 50),
      new EventLog('2023-10-01 37:00:00', 'Scarlett Parker', 'Phone Case', 2, 15),
      new EventLog('2023-10-01 38:00:00', 'Grace Evans', 'Charger', 1, 20),
      new EventLog('2023-10-01 39:00:00', 'Chloe Edwards', 'Screen Protector', 3, 10),
      new EventLog('2023-10-01 40:00:00', 'Luna Collins', 'Cable Organizer', 1, 15),
      new EventLog('2023-10-01 41:00:00', 'Zoe Stewart', 'Laptop Sleeve', 1, 25)];

    this.eventLogDataSource = new MatTableDataSource<EventLog>(EVENT_LOG_DATA);
  }

  ngAfterViewInit() {
    this.eventLogDataSource.paginator = this.paginator;
    this.eventLogDataSource.sort = this.sort;
    this.eventLogDataSource.sort.active = 'datetime';
    this.eventLogDataSource.sort.direction = 'desc';
    this.eventLogDataSource.sort.sortChange.emit({ active: 'datetime', direction: 'desc' });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.eventLogDataSource.filter = filterValue.trim().toLowerCase();

    if (this.eventLogDataSource.paginator) {
      this.eventLogDataSource.paginator.firstPage();
    }
  }

}

export class EventLog {
  datetime: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;

  constructor(dateTime: string, customer: string, product: string, quantity: number, amount: number) {
    this.datetime = dateTime;
    this.customer = customer;
    this.product = product;
    this.quantity = quantity;
    this.amount = amount;
  }
}
