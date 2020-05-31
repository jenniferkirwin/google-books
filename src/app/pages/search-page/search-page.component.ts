import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [ConfigService]
})
export class SearchPageComponent implements OnInit {

  error: any;
  public books: any;

  constructor(private configService: ConfigService) { }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        ({ items }: any) => {
          this.books = [...items];
          console.log(items);
        },
        error => this.error = error
      );
  }

  ngOnInit(): void {
  }

}
