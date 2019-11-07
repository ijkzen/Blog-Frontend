import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() {
  }

  addCodePasteButton() {
    document.querySelectorAll('pre > code').forEach((codeBlock) => {
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.innerText = 'Copy';

      button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
          /* Chrome doesn't seem to blur automatically,
             leaving the button in a focused state. */
          button.blur();

          button.innerText = 'Copied!';

          setTimeout(() => {
            button.innerText = 'Copy';
          }, 2000);
        }, (error) => {
          button.innerText = 'Error';
        });
      });
      console.error(codeBlock.tagName);
      const pre = codeBlock.parentElement;
      pre.parentElement.insertBefore(button, pre);
    });
  }
}
