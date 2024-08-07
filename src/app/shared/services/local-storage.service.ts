import { Injectable } from '@angular/core';
import { Aircraft } from '../classes/aircraft';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static readonly localStorageKey = "AircraftRotation";

  constructor() { }

  saveRotation(value: string): void {
    localStorage.setItem(LocalStorageService.localStorageKey, value);
  }

  getRotation(): any {
    return localStorage.getItem(LocalStorageService.localStorageKey);
  }

  removeRotation(): void {
    localStorage.removeItem(LocalStorageService.localStorageKey);
  }

  clear(): void {
    localStorage.clear();
  }
}
