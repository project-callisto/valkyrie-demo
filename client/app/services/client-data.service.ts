import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { asyncCryptoServiceFactory } from "./async-crypto.service";
import { CryptoService, IDecryptedData, IEncryptedData, IPlainTextData } from "./crypto.service";

class ClientDataServiceBackend {

  public cryptoPlainTextSource: Subject<IPlainTextData> = new Subject<IPlainTextData>();
  public cryptoEncryptedSource: Subject<IEncryptedData> = new Subject<IEncryptedData>();
  public cryptoDecryptedSource: Subject<IDecryptedData> = new Subject<IDecryptedData>();

  public processUserInput(perp: string, user: string): void {
    asyncCryptoServiceFactory().then((crypto: CryptoService): void => {
      this.cryptoPlainTextSource.next(crypto.submitData(perp, user));
      crypto.submitData(perp + perp, user + "Alice");
      crypto.submitData("1234" + perp, user + "Bob");
      crypto.submitData(perp, user + user);
      this.cryptoEncryptedSource.next(crypto.getDataSubmissions()[0]);
      this.cryptoDecryptedSource.next(crypto.decryptData());
    });
  }

}

@Injectable()
class ClientDataServiceApi extends ClientDataServiceBackend {

  public cryptoPlainText$: Observable<IPlainTextData> = this.cryptoPlainTextSource.asObservable();
  public cryptoEncrypted$: Observable<IEncryptedData> = this.cryptoEncryptedSource.asObservable();
  public cryptoDecrypted$: Observable<IDecryptedData> = this.cryptoDecryptedSource.asObservable();

  public submitUserInput(perp: string, user: string): void {
    this.processUserInput(perp, user);
  }

}

export { ClientDataServiceApi as ClientDataService };