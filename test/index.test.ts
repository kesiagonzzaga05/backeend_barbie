import {test, expect, describe} from 'vitest'
import axios from 'axios'
describe('primeiro teste da aplicação',()=>{
    test('espero que 1 seja igual a 1',()=>{
        expect(1).toBe(1)
    })
})

describe('cadastro de filmes',()=>{
    test('espero que o filme seja cadastrado',()=>{
       const filme = {
        titulo: 'Vingadores',
        descricao:"filme marvel",
        iamgem:""
       }
       //passar isso pra minha API
       const resposta = axios.post()
       //Esperar que minha API tenha cadastrado o filme



    })
})
