const bootstrap = require('bootstrap');
const path = require('path');
const webpack = require("webpack");
import { createPopper } from '@popperjs/core';

createPoppper() { createPopper(this.btnDropdownRef.nativeElement, this.popper, { placement: "bottom-end", }); this.btnDropdownRef.nativeElement.parentNode.insertBefore( this.popper, this.btnDropdownRef.nativeElement.nextSibling ); }

module.exports = {entry: './assets/js/script.js',output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins: [new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),],
  mode: 'development'
};