import Vue from 'vue'

const files = require.context('./', true, /index\.js$/i)

export default files.keys().reduce((object, key) => {
  const component = files(key).default
  if (key !== './index.js' && component && component.name) {
    object[component.name] = component
    Vue.component(component.name, component)
  }

  return object
}, {})
