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

## CSS

CSS should go in `static/css`, and should follow a "functional" method, which allows for
greater reusability. Please read [this](http://mrmrs.io/writing/2016/03/24/scalable-css/)
for an idea of why we are taking this approach; [Tachyons](http://tachyons.io) and [BassCSS](http://basscss.com/)
are some pretty good references.

A CSS class name should say exactly _what_ is being done, and composition of class names
in HTML should tell us what it will _look_ like. For example:

```html
<div class="fixed top-0 left-0
            h-100 w-third overflow-y-scroll
            fl bg-blue">
  ...
</div>
```

```css
.fixed { position: fixed; }
.top-0 { top: 0; }
.left-0 { letf: 0; }
.h-100 { height: 100%; }
.w-third { width: calc(100% / 3); }
.fl { float: left; }
.bg-blue { background-color: #357EDD }
.overflow-y-scroll { overflow-y:scroll; }
```

Unfortunatley, this makes the HTML a bit ugly, but the advantage
in the CSS is that we shouldn't have any bugs that come from classes
overwriding each other.

This also makes our CSS file very easy to document and maintain. For example, the
above CSS would be broken into sections as follows

```css

/*
  COLORS

  Classes for setting foreground and background colors on elements.

*/

/* Background Colors */
.bg-black { background-color: #333 }
.bg-blue { background-color: #357EDD }
.bg-red { ... }
.bg-green { ... }
...

/* Text Colors */
.black { color: #333 }
.blue { color: #357EDD }
.red { ... }
.green { ... }
...

/*
  HEIGHTS

  Base:
    h  = height
    vh = vertical screen height
  
  Modifiers:
    -25   = literal value 25%
    -50   = literal value 50%
    -75   = literal value 75%
    -100  = literal value 100%

    1 = 1st step in height scale
    2 = 2nd step in height scale
    3 = 3rd step in height scale
    4 = 4th step in height scale
    5 = 5th step in height scale

*/
h-100 { height: 100% }
h-50 { height: 50% }
...
h1 { height: 1rem;  }
h2 { height: 2rem;  }
h3 { height: 4rem;  }
h4 { height: 8rem;  }
h5 { height: 16rem; }
...

```

And so on. This way we standardize our CSS and make it really easy to read, use, and document.

If you disagree with this approach (and this is still a bit controversial, since it does force clutter
on the HTML, create a new [issue](https://github.com/uoftweb/CoursePages/issues)
