import { Component } from "@angular/core";
import { CryptoService, EncryptedData } from "./services/crypto.service";

import * as $ from "jquery";

@Component({
  selector: "first-step",
  templateUrl: "./templates/first-step.component.html",
  providers: [
    CryptoService,
  ],
  styleUrls: [
    "./styles/base.scss",
    "./styles/step.scss",
  ],
})
export class FirstStepComponent {
  // public encryptedDataArr: object[] = [];

  constructor(private crypto: CryptoService) { }

  public perpInputProcessing(perpInput: string): void {
    // const encryptedData: EncryptedData = this.crypto.encryptData(perpInput);

    let dataPromise = this.crypto.encryptData(perpInput);

    // have to resolve this 'then' error
    dataPromise.then(function(encryptedData) {
      $("#calc-rid").text(encryptedData.rid);
      $("#calc-prg").text(encryptedData.hashedPerpId);
      $("#calc-k-record").text(encryptedData.encryptedRecord);
      $("#calc-derived-s").text(encryptedData.y);

      // display step
      $("#second-step").show();
      $("html, body").animate({
          scrollTop: $("#second-step").offset().top,
      }, 400);
      
    }, function(err) {
      // TODO: display error messages
      console.log('Error');
    });
  }

  public perpInputEvent(event: Event): void {
    event.preventDefault();
    const perpInput: string = $("#perpInput").val();
    if (perpInput) { this.perpInputProcessing(perpInput); }
  }
}
