# Course Pages

## Dependencies 

All the dependencies are listed in `requirements.txt`.

If you're using pip, you can run `pip install -r requirements.txt`

If you're using easy_install, run `easy_install $(cat requirements.txt)` (using bash)

Otherwise follow the instructions below

- [Jinja Installation Guide](http://jinja.pocoo.org/docs/dev/intro/#installation)
- [EasyWatch (optional)](https://github.com/Ceasar/easywatch)

## How to get final html

Run `build.py` and the `index.html` file in the same directory will be updated with the content
from `course-pages/templates`.

If you want the script to watch for changes, (auto reload `index.html` when saving a file in `course-pages/templates`),
run `python build.py --watch`

## How to make a component 

Create an html file in `course-pages/templates`. Suppose you create `course-pages/templates/sidebar.html`, then in `course-pages/templates/index.html`, you should add the reference to the sidebar, as follows:

```html
<!-- 
  index.html stuff 
  ...
-->
{% extends "sidebar.html" %}
<!-- 
  more index.html stuff
  ...
-->
```

Note that only index.html should contian `head`, `doctype`, and `body` tags. Everything in a 
component "assumes" that it is in index.html

## CSS

We're now using [tachyons](http://tachyons.io) for CSS
