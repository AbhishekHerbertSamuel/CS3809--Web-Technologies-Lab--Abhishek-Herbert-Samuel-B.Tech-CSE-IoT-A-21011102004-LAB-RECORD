import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  skills: string[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.skills = this.resumeService.getSkills();
  }
}

