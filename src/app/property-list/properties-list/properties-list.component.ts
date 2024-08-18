import { Component, OnInit } from '@angular/core';
import { PropertyScore } from 'src/app/models/property-score';
import { ScoreListService } from 'src/app/services/score-list.service';

@Component({
  selector: 'mf-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  scores: PropertyScore[] = [];

  constructor(private scoreService: ScoreListService) {

  }

  ngOnInit(): void {
    this.scores = this.scoreService.getScores();
  }

}
