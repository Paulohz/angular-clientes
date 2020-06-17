import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/ServicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servico-prestadoBusca';


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestado'

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: string, mes: number ) : Observable<ServicoPrestadoBusca[]>{
    let httpParams = new HttpParams(); 
    if(!nome){
      nome = ""
    }
    httpParams = httpParams.append("nome", nome);
    if(mes){
      httpParams = httpParams.append("mes", mes.toString());
    }
    const url = this.apiURL + "?" + httpParams;
    return this.http.get<any>(url);
  }
}
