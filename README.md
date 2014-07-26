# What is BTNS

A small css module that allows for nice-looking, fully-responsive buttons.

## Getting started

You can just grab the css.

If you want to customize btns it comes with a few handy gulp tasks for development.
Set up the project by cloning the repo, navigating into it, then installing the necessary dependencies by running:

*Note you might not need to install with sudo*
```bash
git clone git@github:mrmrs/btns.git && cd btns
sudo npm install -g gulp browser-sync
sudo npm install .
```

### To run the development environment

Once you've run npm install just run this very complicated command in your terminal to start gulp

    npm start

This will watch the sass directory and do the following on file change:
  • Compile scss files down to css/app.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your source files)
  • Run csslint and spit the output to your terminal window where you are running gulp
  • Run an instance of livereload. With the chrome and safari extensions, you can see
    changes in the browser without hitting refresh

### To minify assets for production

```gulp production```

or just to minify the css 

```gulp minify-css``` 

This will
  • Compile scss files down to css/app.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your css)
  • Minify all css files in the ./css directory 
  • Compress / minify all images in the ./img directory
  • Compress / minify all svg elements in the ./img/svg/ directory


## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
