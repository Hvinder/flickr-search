import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { Info } from 'src/app/types/info.type';
import { Photo } from '../../../types/api-response.type';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  info: Info;
  constructor(
    private searchService: SearchService,
    public dialogRef: MatDialogRef<ResultCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo
  ) {
    this.searchService.fetchInfo(data.id).subscribe(res => {
      this.info = res;
      console.log(this.info);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getImageUrl(): string {
    return `https://live.staticflickr.com/${this.data.server}/${this.data.id}_${this.data.secret}_w.jpg`;
  }

  downloadImage(): void {
    window.open(`https://live.staticflickr.com/${this.data.server}/${this.data.id}_${this.data.secret}_b.jpg`);
  }

  ngOnInit() {}
}
