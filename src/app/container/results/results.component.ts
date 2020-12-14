import { Component, HostListener, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Photo, Photos } from "../../types/api-response.type";
import { ResultCardComponent } from "./result-card/result-card.component";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
  @Input() set photos(value: Photos) {
    this.photosList = value.photo;
    this.loadAmount = 20;
    console.log(this.photosList);
  }

  photosList: Photo[];
  loadAmount = 16;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // This is to implement load on scroll feature
  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max) {
      this.loadAmount += 16;
    }
  }

  getImageUrl(index: number): string {
    const photo: Photo = this.photosList[index];
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
  }

  openDialog(photo: Photo): void {
    const dialogRef = this.dialog.open(ResultCardComponent, {
      width: "400px",
      data: photo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
