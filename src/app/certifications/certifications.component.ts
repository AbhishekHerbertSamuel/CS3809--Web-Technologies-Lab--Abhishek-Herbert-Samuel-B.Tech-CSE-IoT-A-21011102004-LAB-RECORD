import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
})
export class CertificationsComponent implements OnInit {
  certifications: string[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.certifications = this.resumeService.getCertifications();
  }
}

