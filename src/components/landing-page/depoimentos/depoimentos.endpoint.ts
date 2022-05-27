import { Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from "rxjs";

export interface CommentsDto {
    name: string;
    body: string;
  }

@Injectable()
export class DepoimentosEndpoint {
    protected http: HttpClient;

    private commentsOriginal = new BehaviorSubject<CommentsDto[]>(null);
    private comments = new BehaviorSubject<CommentsDto[]>(null);

    constructor (protected injector: Injector) {
        this.http = injector.get(HttpClient);
        this.getFourElements();
    }

    get values () {
        return this.comments.asObservable();
    }

    getFourElements(){
        this.commentsOriginal.subscribe(val => {
            if (val){
                this.comments.next(this.fourElements);
            }
        })
    }

    get fourElements () {
        if (this.commentsOriginal.value) {
            return this.commentsOriginal.value.slice(0, 4);
        }
        return null;
    }

    public depoimentos() {
        this.http.get('https://gorest.co.in/public/v2/comments').subscribe( (response: any) => {
            if (response) {
                this.commentsOriginal.next(response);
            }
        });
    }
}