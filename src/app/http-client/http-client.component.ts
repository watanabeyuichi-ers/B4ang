import { Component, OnInit } from '@angular/core';
import { HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {



  public param: any = {};

  public messageInfo: any = {
      id: null,
      message: null
    };

  public messageInfoList: any = [this.messageInfo];

  public messageId: number = 1;

  public message: string = '';

  constructor(private httpClientService: HttpClientService) { }


  ngOnInit(): void {
    this.httpClientService.get()
      .then(
        (response) => {
          this.param = response;
          this.messageInfoList = this.param.messages;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }



  public onClickRegister(event: any) {
    this.doRegister();
  }

  public onClickUpdate(event: any) {
    this.doUpdate();
  }

  public onClickDelete(event: any) {
    this.doDelete();
  }

  private doRegister() {
    const body: any = {
      id: this.messageId,
      message: this.message
    };
    this.httpClientService.register(body)
      .then(
        (response) => {
          this.param = response;
          this.messageInfoList = this.param.messages;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  private doUpdate() {
    const body: any = {
      id: this.messageId,
      message: this.message
    };
    this.httpClientService.update(body)
      .then(
        (response) => {
          this.param = response;
          this.messageInfoList = this.param.messages;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  private doDelete() {
    const body: any = {
      id: this.messageId
    };
    this.httpClientService.delete(body)
      .then(
        (response) => {
          this.param = response;
          this.messageInfoList = this.param.messages;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

}
