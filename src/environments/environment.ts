// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API : {
    apiKey: 'at_ZATkjY8NVPWQY2xTOkXmprb6Nmd4k',
    URL: 'https://geo.ipify.org/api/',
  },
  firebaseConfig : {
    apiKey: 'AIzaSyAYH09EK7AVwEV2qrO-IvVc86MJUXlo4iY',
    authDomain: 'iptracker-89af8.firebaseapp.com',
    projectId: 'iptracker-89af8',
    storageBucket: 'iptracker-89af8.appspot.com',
    messagingSenderId: '292052766449',
    appId: '1:292052766449:web:d1c52b8b092224d5eea350'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
