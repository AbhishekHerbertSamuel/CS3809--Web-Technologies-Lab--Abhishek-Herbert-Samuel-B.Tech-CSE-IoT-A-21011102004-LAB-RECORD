import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.title = this.resumeService.getName();
  }
}
