/**
 * When developing, use the bootstrapApplication function to do bootstrap.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/**
 * When in production stage, 
 * 0. [NOTE] All dependent packages should be moved to devDependencies because customElement should be self-contained without external dependencies.
 * 1. [DO] Comment out the above codes and use the following codes to create custom elements.
 * 2. [DO] Remove the "zone.js" of the line "polyfills": ["zone.js"], in angular.json. (line 19)
 * 3. [DO, but opptional] In src/app/app.config.ts file, provide ngZone via window.ngZone (The Element App does not carry its own zone.js, and uses the zone.js provided by the UI's zone.js.)
 *    Hopefully, this step can be removed for zone-less application.
 * 4. [DO] Please modify the package.json file, see the content of the phantom-desk key.
 *    The element
 *    The "tagName" should be unique and will be used as the customElement tag name.
 * 5. [DO] Use npm run pkg to build and pack the element App into a tgz file that can be imported into phantom-desk locally.
 * 6. [Optional] you may use `npm publish` to publish this element app as a public package. Users can install the element app via phantom-desk's web UI.
 */


// import { createApplication } from "@angular/platform-browser";
// import { appConfig } from './app/app.config';
// import {createCustomElement} from '@angular/elements';
// import { AppComponent } from './app/app.component';

// (async () => {
//   const app = await createApplication(appConfig);
//   const elem = createCustomElement(AppComponent, {injector: app.injector});
//   if (!customElements.get('element-app-hello-world')) {
//     customElements.define('element-app-hello-world', elem);
//   }
// })().catch(err => console.log(err));
