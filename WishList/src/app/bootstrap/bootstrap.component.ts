import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.css'
})
export class BootstrapComponent {
  constructor(private modalService: NgbModal) {

  }

  public open(modal:any): void {
    this.modalService.open(modal);
  }
}
