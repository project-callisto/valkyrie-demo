import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { asyncCryptoServiceFactory } from "./async-crypto.service";
import { CryptoService, ICoord, IDecryptedData, IEncryptedData, IPlainTextData } from "./crypto.service";

class ClientDataServiceBackend {

  public cryptoPlainTextSource: Subject<IPlainTextData> = new Subject<IPlainTextData>();
  public cryptoEncryptedSource: Subject<IEncryptedData> = new Subject<IEncryptedData>();
  public cryptoDecryptedSource: Subject<IDecryptedData> = new Subject<IDecryptedData>();
  public cryptoDecrypted: IDecryptedData;
  public cryptoCoords: ICoord[] = [];

  public processUserInput(perp: string, user: string): void {
    asyncCryptoServiceFactory().then((crypto: CryptoService): void => {
      const plainTextData: IPlainTextData = crypto.submitData(perp, user);
      this.updateCoords(plainTextData);
      this.cryptoPlainTextSource.next(plainTextData);
      this.updateCoords(crypto.submitData(perp + perp, user + "Alice"));
      this.updateCoords(crypto.submitData("1234" + perp, user + "Bob"));
      this.updateCoords(crypto.submitData(perp, user + user));
      this.cryptoEncryptedSource.next(crypto.getDataSubmissions()[0]);
      const decryptedData: IDecryptedData = crypto.decryptData();
      this.cryptoDecryptedSource.next(decryptedData); // for emitting the decrypted data update event
      this.cryptoDecrypted = decryptedData; // for attaching the current source for decrypted data
    });
  }

  private updateCoords(plainTextData: IPlainTextData): void {
    this.cryptoCoords.push({
      x: plainTextData.U,
      y: plainTextData.sU,
      pi: plainTextData.pi,
    });
  }
}

@Injectable()
class ClientDataServiceApi extends ClientDataServiceBackend {

  public cryptoPlainText$: Observable<IPlainTextData> = this.cryptoPlainTextSource.asObservable();
  public cryptoEncrypted$: Observable<IEncryptedData> = this.cryptoEncryptedSource.asObservable();
  public cryptoDecrypted$: Observable<IDecryptedData> = this.cryptoDecryptedSource.asObservable();
  public cryptoDecrypted: IDecryptedData = this.cryptoDecrypted;
  public cryptoCoords: ICoord[] = this.cryptoCoords;

  public submitUserInput(perp: string, user: string): void {
    this.processUserInput(perp, user);
  }

}

export { ClientDataServiceApi as ClientDataService };
