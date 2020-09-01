# MercedUI Template

`npm run dev` starts a development server

`npm run build` builds final project in dist folder

Documentation for mercedui => https://github.com/AlexMercedCoder/MercedUI

- Keep in mind components made with the MercedElement baseclass use the shawdow dom so you'll need to create the styling from within the shadow dom. To use sass in the shadow dom you need to modify webpack so the Sass is turned into a css string that can then be interpolated into style tages in your components shadowdom.