# Course Pages

## Install Jinja

[Jinja Installation Guide](http://jinja.pocoo.org/docs/dev/intro/#installation)

## How to get final html

Run `build.py` and the `index.html` file in the same directory will be updated with the content
from `course-pages/templates`

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
