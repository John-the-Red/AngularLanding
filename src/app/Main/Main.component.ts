import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Data: any = [
    {
      imagesrc: '/assets/Images/MinimalArtorias.jpg', name: "Minimal Artorias",
      textinfo: "Knight Artorias was one of the four Knights of Gwyn, the commanding knights of Lord Gwyn's army. Artorias had an unbendable will of steel, which both helped and fed his hatred for servants of the Dark, particularly the Darkwraiths of Kaathe. Lord Gwyn bequeathed him with a custom-made ring, the Wolf Ring, to assist in his already unmatched ability to wield a greatsword. When in New Londo Artorias discovered the ability of abysswalking; earning him his title Artorias the Abysswalker. This allowed him to enter The Abyss, the home of the Darkwraiths and the Four Kings themselves."},
    {
      imagesrc: '/assets/Images/MinimalCloud.jpg',name:"Minimal Cloud",
      textinfo: "An arrogant and proud swordsman at first, Cloud introduces himself to Avalanche as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. Beneath his hardened outer persona is a softer, more caring individual who simply struggles to open up, but is striving to be a hero. Cloud later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame. He develops compassion for the planet and the people he fights to protect from the Shinra Electric Power Company and his nemesis, Sephiroth."
    },
    {
      imagesrc:'/assets/Images/MinimalZoroark.jpg',name:"Minimal Zoroark",
      textinfo: "It doesn’t just transform itself—it also has the power to make hundreds of people see its illusions. If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods. Stories say those who tried to catch Zoroark were trapped in an illusion and punished."
    }
  ];

}
