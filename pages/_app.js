// Imports the global.css file which, as the name states, is a globally used CSS. You want to use this to keep
// color schemes matching throughout the application. You can add other CSS after the global import to override anything
// or add more pazazz to the page you are importing to.

import '../styles/global.css'

// Think of this as just a shell or the Main() argument. You create the APP constructor that takes in components (which populate the page with components)
// and pageProps (which can be variables or functions that get passed from one page to another, similar to React Hooks).
export default function App({ Component, pageProps }) {
  // Components are treated similarly to HTML tags like <p> or <button> but custom to whatever you made
  // the elipses (...) before pageProps breaks down the object into it's smaller parts.
  // EX. pageProps = {
  //     name: 'Twilio',
  //     workFromHome: True 
  // }
  // The above object would break out into something similar to having done the following:
  // <Component {pageProps.name, pageProps.workFromHome, etc} />
  return <Component {...pageProps} />
}
