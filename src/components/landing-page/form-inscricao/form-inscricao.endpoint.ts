import { Injectable, Injector } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from "rxjs";

export interface UsersDto {
    name: string;
    email: string;
    phone: string;
  }

@Injectable()
export class FormInscricaoEndpoint {
    protected http: HttpClient;

    private message = new BehaviorSubject<String>(null);

    constructor (protected injector: Injector) {
        this.http = injector.get(HttpClient);
    }
    
    get msg() {
        return this.message.asObservable();
    }

    public cadastrar(body: any) {

        const authorizationHeader = new HttpHeaders().set("Authorization",
          "Bearer 365bed2bc111259ea5a1937848b8f7e4e8b0d6ca4efb10ca9d874938c444dbe6");


        this.http.post('https://gorest.co.in/public/v2/users', body,
            {headers: authorizationHeader}).subscribe( (response: any) => {
            if (response) {
                this.message.next("Cadastro realizado com sucesso !");
            }            
        }, error => {
            if (error){
                this.message.next("Falha ao realizar o cadastro!");
            }           
        });
    }
}