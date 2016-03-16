# Build Apps with React Native: App to use the Parse alternative RoR server
This app works with the Rails server app that can be found in [this repo](https://github.com/decampj4/build-apps-with-react-native-parse-alternative-server).
Stephen Grider teaches an excellent class on Udemy called [Build Apps with React Native](https://www.udemy.com/reactnative/learn/#/). The one problem is 
that Parse is going out of business, so his fourth lesson is difficult to complete as it relied heavily on the Parse
backend for user sign up and login. To get around this, I wrote a very basic RoR server that would perform these tasks, which
can be found in the repo referenced above. In the process, I had to change some of the lesson's code to play well with my server.
So for anyone interested in what the code for a working version of the "authentication" app looks like post Parse, please feel free to
look at, modify, and do whatever with this code.

Please be aware though that I used ES6 syntax (out of personal habit and preference) and I also introduced AsyncStorage to the app. AsyncStorage
uses the device's local storage to store and retrieve key value pairs. The introduction of this feature was useful in trying to
maintain the spirit of the lesson, and it's good to be introduced to it in general (I'm pretty sure that the Parse React library
was using it under the covers anyway). It does, however, introduce some potential pitfalls and additional code complexity.

Lastly, be aware that I took the fast and dirty approach to writing this code. It's meant as a working example, nothing more.
