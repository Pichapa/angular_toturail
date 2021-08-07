import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interface/hero';

import { HeroService } from '../../service/hero.service';

import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// export class HomeComponent implements OnInit {
//   heroes: Hero[] = [];

// selectedHero?: Hero;

// constructor(
//   private heroService: HeroService,
//   private messageService: MessageService
// ) {}

// ngOnInit(): void {
//   this.getHeroes();
// }

// //on click
// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
//   this.messageService.add(`HomeComponent: Selected hero id=${hero.id}`); //add show message
// }

// getHeroes(): void {
//   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
// }
export class HomeComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
}
