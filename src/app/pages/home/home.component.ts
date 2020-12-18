import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { StakeModalComponent } from "../../components/stake-modal/stake-modal.component";

@Component({
  selector: "essence-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  stakeModalRef: MatDialogRef<StakeModalComponent>;
  public emojisList = [
    {
      icon: "🔥",
      name: "Fire",
      stacked: 1255,
      reward: 19213
    },
    {
      icon: "💧",
      name: "Water",
      stacked: 4355,
      reward: 25355
    },
    {
      icon: "🌈",
      name: "Rainbow",
      stacked: 23345,
      reward: 53256
    },
    {
      icon: "🌪",
      name: "Wind",
      stacked: 23452,
      reward: 43455
    },
    {
      icon: "🎈",
      name: "Baloon",
      stacked: 0,
      reward: 0,
      rare: true,
      followLink: true
    },
    {
      icon: "💎",
      name: "Diamond",
      stacked: 0,
      reward: 0,
      rare: true,
      tweetLink: true
    }
  ];

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  public openStakeModal(): void {
    // this.dialog.open(StakeModalComponent);

    this.stakeModalRef = this.dialog.open(StakeModalComponent, {
      width: "800px"
    });

    this.stakeModalRef.afterClosed().subscribe(res => {
      if (res == true) {
        console.log("modal closed");
      }
    });
  }
}
