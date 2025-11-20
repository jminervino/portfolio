import { Component, OnInit } from '@angular/core';
import { Skills, Stack } from 'src/app/core/models/skills';
import { SkillsService } from 'src/app/core/services/skills.service';


@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  stacks: Stack[] = [];

  sunizeIcon: string = `<svg style="padding: 6px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.479 31.978C25.622 31.229 32 24.36 32 16S25.622.77 17.479.022v3.782a8.6 8.6 0 015.302 3.017l-2.393 1.957a5.503 5.503 0 00-2.909-1.833v18.377a5.523 5.523 0 002.936-1.864 5.466 5.466 0 001.11-4.566 5.461 5.461 0 00-1.003-2.19 5.5 5.5 0 00-1.851-1.552l1.426-2.735a8.593 8.593 0 012.893 2.424 8.51 8.51 0 01-.167 10.557 8.598 8.598 0 01-5.344 3.068v3.514z" fill="url(#paint0_linear_3862_7948)"></path><path d="M14.79 32v-3.536a8.599 8.599 0 01-5.302-3.017l2.393-1.957a5.502 5.502 0 002.909 1.832V6.945a5.527 5.527 0 00-2.936 1.865 5.464 5.464 0 00-1.11 4.565c.166.796.51 1.544 1.003 2.191a5.5 5.5 0 001.851 1.552l-1.426 2.734a8.594 8.594 0 01-2.893-2.424 8.511 8.511 0 01.167-10.557 8.597 8.597 0 015.344-3.067V0C6.519.62 0 7.547 0 16s6.519 15.38 14.79 16z" fill="url(#paint1_linear_3862_7948)"></path><defs><linearGradient id="paint0_linear_3862_7948" x1="0.00000113643" y1="-5.8182" x2="34.9573" y2="-3.35073" gradientUnits="userSpaceOnUse"><stop stop-color="#FFAF45"></stop><stop offset="1" stop-color="#FF564E"></stop></linearGradient><linearGradient id="paint1_linear_3862_7948" x1="0.00000113643" y1="-5.8182" x2="34.9573" y2="-3.35073" gradientUnits="userSpaceOnUse"><stop stop-color="#FFAF45"></stop><stop offset="1" stop-color="#FF564E"></stop></linearGradient></defs></svg>`
  devzappIcon: string = '<svg style=" padding: 6px" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill = "none" > <path d="M26.2078 9.93444H14.8086L21.9054 0.967496C22.2134 0.572929 21.9324 0 21.4351 0H5.45785C5.27408 0 5.10112 0.0864795 4.98761 0.22701L0.128498 6.41035C-0.179589 6.80492 0.10147 7.37786 0.598732 7.37786H10.6197L3.63635 16.3448C3.32827 16.7394 3.60933 17.3123 4.10659 17.3123H15.6571V23.4794C15.6571 23.9767 16.2841 24.1875 16.5868 23.7983L26.6726 10.9019C26.9807 10.5074 26.6996 9.93444 26.2023 9.93444H26.2078Z" fill = "#1EA659" /> </svg>'

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.stacks = this.skillsService.getStacks();
  }
}
