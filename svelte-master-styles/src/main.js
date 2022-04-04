import App from './App.svelte'
import '@master/styles'
import '@master/normal.css'

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
