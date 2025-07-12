# Shadcn Calendar

This is but a simple prototype to both document how to get a react up with vite 
easily, that installs the https://ui.shadcn.com/docs/components/calendar[Shadcn Calendar] 
and then customizes it in different forms.

## Installation

The steps that were taken in order to get the app and dependencies up and running 
were:

- `pnpm create vite@latest shadcn-calendar` (React > Typescript + SWC)
- `pnpm install`

## Notes

- Used `pnpm`. So installation is with `pnpm install`
- `pnpm run dev`

### Shadcn

Shadcn is a library built in order to allow developers to import components surgically 
and build their own component libraries it's basically an "unstylized component 
library". It allows for one to add already set-up components that can be then extended 
both in styling and functionality.

#### Setup

Reference: https://ui.shadcn.com/docs/installation/vite[DOCS].

Due to the fact that we have setup our project with _vite_ we will be using shadcn's 
docs to set the project up correctly and import its calendar.

**Key Takeaways**

.You need to add Tailwind CSS
.Replace the index.css
.Edit the typescript files
.Update `vite.config.ts`
.Run shadcn's CLI
.Profit with components!

#### Adding calendar

.`pnpm dlx shadcn@latest add calendar`

### Errors and solutions



## Takeaways

<!-- - Shadcn helps getting an already working component to stylize to one's liking pretty easily.
- To extend functionality we do have to extend the base component
- The calendar can be resized however we see fit, and that's nice. -->