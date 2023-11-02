import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private name: string = 'Abhishek Herbert Samuel';
  private certifications: string[] = [
    "Data Science for Engineers - IIT Madras:\nAmong the top 100 scorers (top 5% out of 1992 students certified) in this NPTEL course."
  ];
  private skills: string[] = ['Python', 'Java', 'C', 'MySQL', 'Data Science'];

  getName(): string {
    return this.name;
  }

  getCertifications(): string[] {
    return this.certifications;
  }

  getSkills(): string[] {
    return this.skills;
  }
}

