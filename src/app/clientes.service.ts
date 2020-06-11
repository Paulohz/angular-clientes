import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './clientes/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { 
    
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>( "http://localhost:8080/api/clientes/", cliente)

  }

  /*getCliente() :Observable<Cliente[]> {
    return null;
  }*/

  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Paulo Henrique";
    cliente.cpf = "2012";
    cliente.dataCadastro = "01/01/2020"
    return [cliente];
  }
}
