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

## Documentation

If you create a component, say `component.html`, and you want to document it,
do the following:

  1. Go to the docs branch (`git checkout docs`)
  2. Create a new file in `docs`, and reference it in `SUMMARY.md`.
  3. Title it `# Component`, replaceing "Component" with your component name.
  4. Write a short description of the component, then place the html for it in
     code delimiters.
  3. Go to [jsfiddle](https://jsfiddle.net/)
  4. Place the below in the `html` section, substituting the html in `component.html` for the text "place content of ...".
  ```
  <div>
    <nav class="sticky w-third top-0 left-0 vh-100 overflow-y-scroll fl bg-washed-blue">
      <header class="ph3">
        <h1 class="f1 fw5 black">CSC488</h1>
        <h2 class="f2 fw5 gray">Compilers and Interpreters</h2>
        <h3 class="f3 fw5 gray-80">Winter 2016</h3>
      </header>
    </nav>
    <section class="w-two-thirds fl vh-100 ov-y-scroll bg-white">
      <!-- place content of `component.html` here -->
    </section>
  </div>
  ```
  5. Click on *External Resources* in the sidebar, and insert the following
     link: `https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css`. This will
     add the tachyons library.
  6. Click save.
  7. Add the following after the closing code delimiter in the markdown file. 
  ```
  <iframe
    style="width: 100%; height: 300px; border: none"
    src="http://jsfiddle.net/REPLACE/embedded/">
  </iframe>
  ```
  8. Replace "REPLACE" with the string at the end of the url, for example,
     "nfs0k0bn"
  9. Commit and push.
  10. Go on GitHub and submit a pull request.
