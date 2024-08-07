import { Injectable } from '@angular/core';
import { Aircraft } from '../classes/aircraft';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static readonly localStorageKey = "Schedule";

  constructor() { }

  saveSchedule(value: Aircraft[]): void {
    localStorage.setItem(LocalStorageService.localStorageKey, JSON.stringify(value));
  }

  getSchedule(): any {
    let item = localStorage.getItem(LocalStorageService.localStorageKey);
    return (item ? JSON.parse(item) : null);
  }

  removeSchedule(): void {
    localStorage.removeItem(LocalStorageService.localStorageKey);
  }

  clear(): void {
    localStorage.clear();
  }
}
