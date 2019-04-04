<template>
  <div id="app">
    <eox-page-layout>
      <slot name="page-content">
When choosing a JavaScript framework to create front-end applications, one has the choice between Google's Angular framework (https://angular.io/), Facebook's React framework (https://reactjs.org/), or the Vue framework (https://vuejs.org/). All three frameworks offer similar funcionality, with the main benefit of keeping an application user interface in sync with the state, a feat not possible to achieve with "vanilla" JavaScript.


A quick analysis of these three frameworks gives insight into their main differences:


# Size and load times
The sizes of the libraries are as follows:

- Angular: 500+ KB
- React: 100 KB
- Vue: 80 KB

Although there is a significant difference between the sizes of the frameworks, they are still small as compared to the average webpage size (2+ MB in 2018). Additionally, if you use a popular CDN to load these libraries, it is highly probable that a user has the library already loaded in their local system.


# Components
Components are integral parts of all three frameworks. A component generally gets an input, and changes behavior based on it. This behavior change generally manifests as a change in the UI of some part of the page. The use of components makes it easy to reuse code. A component may be a cart on an e-commerce site or a login box on a social network.

## Angular
In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code.

## React
React combines the UI and behavior of components. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.

## Vue
In Vue, UI and behavior are also a part of components, which makes things more intuitive. However, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Twitter's popular CSS-framework Bootstrap.


# Learning Curve
## Angular
Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript (a strict syntactical superset of JavaScript, developed and maintained by Microsoft) and MVC.

## React
React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on StackOverflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.

## Vue
Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test. To help, Vue has very circumstantial documentation which can fasten learning curve for developers and save a lot of time to develop an app using only the basic knowledge of HTML and JavaScript.


# Community and development
Vue has a huge number of watchers, stars and forks. This shows its popularity among users. However, the number of commits and contributors for Vue are lower than Angular and React.
One possible explanation is that Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to the repositories.
From the statistics, all three projects show significant development activity, and this is surely going to continue in the future.


# Migrations and Updates
Angular plans major updates every six months. There is also a period of another six months before any major APIs are deprecated, which gives you the time of two release cycles (one year) to make necessary changes if any.
Facebook has stated that stability is of utmost importance to them, as huge companies like Twitter and Airbnb use React. Upgrades through versions are generally the easiest in React, with scripts such as react-codemod helping you to migrate.
In the FAQ section for Migration, Vue mentions that 90% of the APIs are same if you are migrating from 1.x to 2. There is a migration helper tool that works on the console to assess the status of your app.


# License
All the frameworks are offered via a MIT license.


# Conclusion
According to EOX, the simplicity of Vue, combined with its small size and fast load time, high customizability, ability to integrate well with other libraries, it's shallow learning curve and the rapidly growing open source community enthusiasm, makes it a good choice for developing a frontend appliation. EOX hat the opportunity to gain familiarity with the framework in past projects and is confident about its usage in small- and largescale applications.
      </slot>
    </eox-page-layout>
  </div>
</template>

<script>
import EoxPageLayout from './components/PageLayout.vue'

export default {
  name: 'app',
  components: {
    EoxPageLayout
  }
}
</script>

<style>

</style>
