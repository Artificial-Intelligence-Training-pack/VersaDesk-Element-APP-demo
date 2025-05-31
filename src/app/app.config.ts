import { ApplicationConfig, NgZone } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [] // Use this when in the developing stage.
  /**
   * Use the following providers to use window.ngZone that will be provided from phantom-desk UI client.
   */
  // providers: [{
  //   provide: NgZone,
  //   useValue: (window as any).ngZone
  // }]
};
