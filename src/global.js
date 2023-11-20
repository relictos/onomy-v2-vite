import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
      background: var(--bg-body-bg);
      font-family: var(--font-main);
      color: var(--color-text-2lvl);
    }
    button, input {
      font-family: var(--font-main);
      padding: 0px;
      margin: 0px;
      border: 0px;
      border-radius: 0px;
    }

    /* Transition style helpers */
    
    .transition{
      transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
      transition-duration: 250ms;
    }
    .ease-in{
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }
    .ease-out{
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    .duration-300{
      transition-duration: .3s;
    }
    .duration-200{
      transition-duration: .2s;
    }
    .duration-150{
      transition-duration: .15s;
    }

    .opacity-0{
      opacity: 0;
    }
    .opacity-100{
      opacity: 1;
    }
    .translate-y-0{
      transform: translateY(0px);
    }
    .translate-y-1{
      transform: translateY(0.25rem);
    }
    .scale-95{
      transform: scale(.95);
    }
    .scale-100{
      transform: scale(1);
    }
:root {

/* fonts */
--font-main: Poppins;

/* font sizes */
--text-16-size: 16px;
--text-12-size: 12px;
--text-14-size: 14px;
--text-20-size: 20px;
--text-24-size: 24px;

/* font weights */
--text-medium: 500;
--text-semibold: 600;

/* Colors */
--bg-body-bg: #0D0C0F;
--bg-element-bg: #1f1f1f;
--bg-block-bg: #141315;
--bg-block-highlighted-bg: #1A1A1A;
--dialog-dark-overlay: rgba(0,0,0,85%);

--bg-button-primary: #e1e1e5;
--bg-button-secondary: #272727;
--bg-button-primary-hover: #EEEEF2;
--bg-button-secondary-hover: #333333;

--color-border-default: #282828;
--color-border-highlight: #404040;

--color-icon-default: #474747;
--color-icon-highlight: #89878C;

--color-text-1lvl: #e3e3ed;
--color-text-2lvl: #89878c;
--color-text-3lvl: #5b5a5d;
--color-text-black: #0d0c0f;

--color-red: #f5754d;
--color-red-transparent: rgba(245,117,77,0.1);
--color-green: #a6cfb8;
--color-green-transparent: rgba(166,207,184,0.1);

--color-blue: #2B78EC;

/* CSS Transitions */
--transition-default: .2s;

/* Gaps */
--gap-0px: 0px;
--gap-2px: 2px;
--gap-4px: 4px;
--gap-6px: 6px;
--gap-8px: 8px;
--gap-12px: 12px;
--gap-16px: 16px;
--gap-20px: 20px;
--gap-24px: 24px;
--gap-32px: 32px;


/* Paddings */
--padding-4px: 4px;
--padding-6px: 6px;
--padding-8px: 8px;
--padding-10px: 10px;
--padding-12px: 12px;
--padding-16px: 16px;
--padding-20px: 20px;
--padding-24px: 24px;
--padding-32px: 32px;

/* Border radiuses */
--br-2px: 2px;
--br-4px: 4px;
--br-6px: 6px;
--br-24px: 24px;

/* Effects */
--btn-primary-inner-shadow: 0px -1px 1px rgba(0, 0, 0, 0.25) inset, 0px 2px 1px #fff inset;
--btn-secondary-inner-shadow: 0px -1px 1px #1c1c1c inset, 0px 1px 1px #303030 inset;
}
`;
