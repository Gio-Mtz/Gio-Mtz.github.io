import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioMockDataService } from '../portfolio-mock-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = { categories: [] };
  categories: Array<any> = [];
  expanded: boolean[] = [];

  constructor(private mock: PortfolioMockDataService) {}

  ngOnInit(): void {
    this.skills = this.mock.getSkillsData() ?? { categories: [] };
    this.categories = (this.skills.categories || []).map((c: any) => {
      const score = this._categoryScore(c);
      return { ...c, score };
    });
    this.expanded = this.categories.map(() => true);
  }

  // si quieres mantener toggles en el futuro
  toggleCard(i: number) {
    this.expanded[i] = !this.expanded[i];
  }

  levelToPercent(level: string): number {
    if (!level) return 50;
    const l = level.toString().toLowerCase();
    if (l.includes('beginner') || l.includes('junior')) return 25;
    if (l.includes('intermediate') || l.includes('mid')) return 55;
    if (l.includes('advanced') || l.includes('senior')) return 85;
    if (!isNaN(Number(level))) {
      const n = Math.max(0, Math.min(100, Number(level)));
      return n;
    }
    return 50;
  }

  private _categoryScore(category: any): number {
    if (
      !category ||
      !Array.isArray(category.skills) ||
      category.skills.length === 0
    )
      return 0;
    const scores = category.skills.map((s: any) =>
      this.levelToPercent(s.level)
    );
    const sum = scores.reduce((a: number, b: number) => a + b, 0);
    return Math.round(sum / scores.length);
  }

  // SVG helpers (ya presentes)
  private donutR = 36;
  private donutC = 2 * Math.PI * this.donutR;

  circleOffset(percent: number): string {
    const dash = (percent / 100) * this.donutC;
    const offset = Math.max(0, this.donutC - dash);
    return `${offset}`;
  }

  circleCircumference(): string {
    return `${this.donutC}`;
  }

  formatPercent(n: number): string {
    return `${n}%`;
  }

  // Si quieres una función para obtener keywords de cada skill centralizada:
  keywordsForSkill(s: any): string[] {
    return s?.keywords ?? [];
  }
}
