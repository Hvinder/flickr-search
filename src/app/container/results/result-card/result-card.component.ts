import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Photo } from '../../../types/api-response.type';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ResultCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getImageUrl(index: number): string {
    return `https://live.staticflickr.com/${this.data.server}/${this.data.id}_${this.data.secret}_w.jpg`;
  }

  ngOnInit() {}
}
