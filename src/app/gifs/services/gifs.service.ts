import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';


// const GIPHY_API_KEY = "mE57p0ntAOyBJuAC1fbWr2YHBCZEKPUM";

@Injectable({
  providedIn: 'root' //Permitimos que este servicio en todo el root, toda la app.
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey : string = 'mE57p0ntAOyBJuAC1fbWr2YHBCZEKPUM';
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistoy(tag:string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string) :void{
    if(tag.length === 0) return;
    this.organizeHistoy(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

      this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe( resp => {
        this.gifList = resp.data;
        console.log(this.gifList)
      })

  }
}
