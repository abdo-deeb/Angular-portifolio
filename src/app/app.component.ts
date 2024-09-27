import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BioAndAboutMeComponent } from './components/bio-and-about-me/bio-and-about-me.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { FooterComponent } from './components/footer/footer.component';
//decorator  vitual type function
//decorator pattern 
@Component({

  ///component directive
  selector: 'app-root',
  standalone: true,   //every component use its properties
  // imports: [RouterOutlet],
    imports: [HeroSectionComponent,BioAndAboutMeComponent,SkillsSectionComponent,FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// @Component({})


//Component
export class AppComponent {
  title :String = 'day1';
}
