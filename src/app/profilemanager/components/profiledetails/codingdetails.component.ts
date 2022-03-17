import { Component } from '@angular/core'
import { Renderer2, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Component({
    templateUrl: './codingdetails.component.html',
    styleUrls: ['./codingdetails.component.scss']
})

export class CodingDetailsComponent {
    constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document){

    }
    ngOnInit(){
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'RepoJS/repo.js';
        s.text = `$('#repo1').repo({ user: 'darcyclarke', name: 'Repo.js' });`;
        this.renderer2.appendChild(this._document.body, s); 
    }
}