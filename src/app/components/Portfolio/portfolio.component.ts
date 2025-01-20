import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  HostListener,
  OnChanges,
  SimpleChanges,
  signal,
  effect,
  Injector,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnChanges {
  private sections: HTMLElement[] = [];
  private indexLinks: HTMLElement[] = [];
  private currentSectionIndex: number = 0;
  private isScrolling: boolean = false;
  private signalEffect = effect(() =>
    console.log(`Signal effect outside constructor ${this.newSignal()}`)
  );
  newSignal = signal(0);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector
  ) {
    effect(
      () => {
        console.log(this.newSignal());
      },
      { injector: this.injector }
    );
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showSection('hero');
    }
    this.newSignal.set(1);
  }

  ngAfterViewInit() {
    this.newSignal.set(2);
    if (isPlatformBrowser(this.platformId)) {
      this.sections = Array.from(document.querySelectorAll('.section'));
      this.indexLinks = Array.from(document.querySelectorAll('.index li'));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.newSignal.set(3);
  }

  @HostListener('window:wheel', ['$event'])
  onWindowWheel(event: WheelEvent) {
    this.newSignal.update((value) => value + 1);
    if (this.isScrolling) return;

    if (event.deltaY > 0) {
      this.nextSection();
    } else {
      this.previousSection();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeyDown(event: KeyboardEvent) {
    if (this.isScrolling) return;

    if (event.key === 'ArrowRight') {
      this.nextSection();
    } else if (event.key === 'ArrowLeft') {
      this.previousSection();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (this.isScrolling) return;

    const currentSection = this.sections[this.currentSectionIndex];
    const currentSectionTop = currentSection.getBoundingClientRect().top;

    if (currentSectionTop > 0) {
      this.currentSectionIndex--;
      this.updateActiveLink(this.sections[this.currentSectionIndex].id);
    } else if (currentSectionTop < 0) {
      this.currentSectionIndex++;
      this.updateActiveLink(this.sections[this.currentSectionIndex].id);
    }
  }

  nextSection() {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
      this.scrollToSection(this.sections[this.currentSectionIndex].id);
    }
  }

  previousSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.scrollToSection(this.sections[this.currentSectionIndex].id);
    }
  }

  scrollToSection(sectionId: string) {
    this.isScrolling = true;
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);

    this.updateActiveLink(sectionId);
  }

  showSection(sectionId: string) {
    this.sections.forEach((section) => {
      section.classList.remove('active');
    });

    this.indexLinks.forEach((link) => {
      link.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    const activeLink = document.querySelector(`#${sectionId}-link`);

    activeSection?.classList.add('active');
    activeLink?.classList.add('active');

    this.currentSectionIndex = this.sections.findIndex(
      (section) => section.id === sectionId
    );

    activeSection?.scrollIntoView({ behavior: 'smooth' });
  }

  updateActiveLink(sectionId: string) {
    this.indexLinks.forEach((link) => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`#${sectionId}-link`);
    activeLink?.classList.add('active');
  }
}
