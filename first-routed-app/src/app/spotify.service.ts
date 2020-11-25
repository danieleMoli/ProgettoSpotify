import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDKx_IaQoinBz4HtMetJXsQtmFBd6dSIL6Ci4tkbUjk8u9EtGq3AKhIudA1utsKGSfuyuhtHCFQRD_01R5E1JPhcDTqlGBDDvfpBLN3uUIHm2e-008EkMUQITxV8a3ahdlpbhmiASc'
    });


    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDKx_IaQoinBz4HtMetJXsQtmFBd6dSIL6Ci4tkbUjk8u9EtGq3AKhIudA1utsKGSfuyuhtHCFQRD_01R5E1JPhcDTqlGBDDvfpBLN3uUIHm2e-008EkMUQITxV8a3ahdlpbhmiASc'
    });

    return this.http.get(url, { headers });
  }
}
