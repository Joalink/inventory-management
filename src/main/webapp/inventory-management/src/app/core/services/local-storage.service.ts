// import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable(
//   { providedIn: 'root' }
// )
// export class LocalStorageService {
//   constructor(@Inject(PLATFORM_ID) private platformId: object) {}

//   setItem(key: string, value: string): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.setItem(key, value);
//     }
//   }

//   getItem(key: string): string | null {
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem(key);
//     }
//     return null;
//   }

//   removeItem(key: string): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.removeItem(key);
//     }
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  // Set item in local storage
  setItem(key: string, value: any): void {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  }
  // Get item from local storage
  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading from local storage', error);
      return null;
    }
  }
  // Remove item from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  // Clear all local storage
  clear(): void {
    localStorage.clear();
  }
}