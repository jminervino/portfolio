import { Injectable } from '@angular/core';
import { Timeline } from '../models/timesline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private timelines: Timeline[] = [
    {
      title: "A Primeira Grande Oportunidade",
      date: "02 de Dezembro de 2022",
      description: "Minha primeira oportunidade no mercado de trabalho recebendo, onde trabalhei como Backend na Sunize com Typescript e Node.js"
    },
    {
      title: "Inicio de Carreira",
      date: "22 de Agosto de 2022",
      description: "Minha primeira oportunidade no mercado de trabalho, onde trabalhei como Backend na Sunize com Typescript e Node.js"
    },
    {
      title: "Web Full Stack",
      date: "28 de Março de 2022",
      description: "Uma decisão importante, abdicar 4 meses por algo incerto que foi o Bootcamp da Soulcode de 700Horas, mas criei toda minha base em Programação, e tudo que eu sei foi construido lá"
    },
    {
      title: "Primeiro Framework",
      date: "15 de Dezembro 2021",
      description: "Iniciei o curso de Node.js com Requisição de API externa utilizando o Axios e o Cors com 40Horas de Pratica e Teoria com Projeto final do Iniciativa Padawan",
    },
    {
      title: "HTML & CSS",
      date: "30 de Setembro de 2021",
      description: "Primeiro contato com Front-end, dei os primeiros passos em HTML e CSS na plataforma do cursoemvideo!"
    },
    {
      title: "Olá Java",
      date: "11 de Agosto de 2021",
      description: "Aqui foi onde dei inicio a toda minha base de sintaxe de linguaguem, foi um desafio aprender Java, mas foi onde aprendi Orientação a Objeto, metodos de acesso"
    },
    {
      title: "Algoritmos",
      date: "22 de Abril de 2021",
      description: "O inicio de tudo, os primeiros passos foram no curso de Algoritmos do professor Gustavo Guanabara (Pai da Programação) da plataforma cursoemvideo"
    },

]

getTimeslines(){
  return this.timelines;
}

}
