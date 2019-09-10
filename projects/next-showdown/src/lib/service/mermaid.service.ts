import {Injectable} from '@angular/core';

import * as mermaid from 'mermaid';

@Injectable({
  providedIn: 'root'
})
export class MermaidService {

  constructor() {
    mermaid.default.initialize({
      theme: 'forest',
      securityLevel: 'loose',
      startOnLoad: false,
      flowchart: {
        htmlLabels: false,
        curve: 'cardinal'
      },

    });
  }

  public renderMermaid(view: HTMLElement) {
    const elements = view.querySelectorAll('.mermaid');
    elements.forEach((item, i) => {
      const source = item.textContent;

      mermaid.default.mermaidAPI.render(
        `mermaid-${Math.random().toString(32).slice(2)}-${i}`,
        source,
        (code) => {
          item.innerHTML = code;
        }
      );
    });
  }
}
