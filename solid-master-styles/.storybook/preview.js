import '@master/styles'
import '@master/normal.css'
import '@master/keyframes.css'

import { createRoot } from "solid-js";
import { insert, template, createComponent } from "solid-js/web";
export const decorators = [
  (Story) =>
    createRoot(() => {
      const el = template(`<div></div>`, 2).cloneNode(true);
      insert(el, createComponent(Story, {}));
      return el;
    }),
];
