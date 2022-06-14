import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words: IWord[] = [];
  constructor(private dictionaryService: DictionaryService) {
    this.words = dictionaryService.getAll();
  }

  ngOnInit(): void {
  }
}
