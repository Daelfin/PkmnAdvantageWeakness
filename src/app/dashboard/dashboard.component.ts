import { PokeapiService } from './../services/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Type } from '../type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private pokeapiService: PokeapiService) {}

  typeVector: Type[] = [];
  typeName: string = '';
  doubleDamageFromVector: number[] = [];
  halfDamageToVector: number[] = [];
  doubleDamageToVector: number[] = [];
  halfDamageFromVector: number[] = [];
  doubleDamageFrom: string = '';
  halfDamageTo: string = '';
  doubleDamageTo: string = '';
  halfDamageFrom: string = '';

  advantageRecommendation: string = '';
  disadvantageRecommendation: string = '';

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.pokeapiService
      .getTypes()
      .subscribe((response) => (this.typeVector = response));
  }

  getTypeData(id: number) {
    this.doubleDamageFrom = '';
    this.halfDamageTo = '';
    this.doubleDamageTo = '';
    this.halfDamageFrom = '';
    var type = this.typeVector[id];
    this.typeName = type.name;

    //Talves salvar o type inteiro seja mais eficiente

    this.doubleDamageFromVector = type.damage_relations.double_damage_from;
    this.doubleDamageToVector = type.damage_relations.double_damage_to;
    this.halfDamageFromVector = type.damage_relations.half_damage_from;
    this.halfDamageToVector = type.damage_relations.half_damage_to;

    this.processReccomendations();

    type.damage_relations.double_damage_from.forEach((fraqueza) => {
      this.doubleDamageFrom =
        this.doubleDamageFrom + ' ' + this.typeVector[fraqueza].name;
    });
    type.damage_relations.half_damage_to.forEach((metadeDoDano) => {
      this.halfDamageTo =
        this.halfDamageTo + ' ' + this.typeVector[metadeDoDano].name;
    });
    type.damage_relations.double_damage_to.forEach((danoCritico) => {
      this.doubleDamageTo =
        this.doubleDamageTo + ' ' + this.typeVector[danoCritico].name;
    });
    type.damage_relations.half_damage_from.forEach((resistencia) => {
      this.halfDamageFrom =
        this.halfDamageFrom + ' ' + this.typeVector[resistencia].name;
    });
  }

  processReccomendations() {
    this.advantageRecommendation = '';
    this.doubleDamageFromVector.forEach((type) => {
      if (this.halfDamageToVector.includes(type)) {
        this.advantageRecommendation += this.typeVector[type].name + ' ';
      }
    });
    this.disadvantageRecommendation = '';
    this.doubleDamageToVector.forEach((type) => {
      if (this.halfDamageFromVector.includes(type)) {
        this.disadvantageRecommendation += this.typeVector[type].name + ' ';
      }
    });
  }
}
