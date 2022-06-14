import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.css']
})
export class WordInfoComponent implements OnInit {
  infoWord: IWord;
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.infoWord = this.dictionaryService.findWordById(parseInt(id));
      }
    });
  }

  ngOnInit(): void {
  }

}
