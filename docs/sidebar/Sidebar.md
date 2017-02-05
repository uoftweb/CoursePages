# Sidebar

## HTML
 
The sidebar 

```css
/* CSS for sidebar option 1 */
.sidebar {
  position: fixed;
  width: (100% / 3);
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: scroll;
  float: left;
  background-color: #F8F8FF
}
```

```html
<<<<<<< HEAD
<div>
  <nav class="sticky w-third top-0 left-0 vh-100 overflow-y-scroll fl bg-washed-blue">
    <header class="ph3">
      <h1 class="f1 fw5 black">CSC488</h1>
      <h2 class="f2 fw5 gray">Compilers and Interpreters</h2>
      <h3 class="f3 fw5 gray-80">Winter 2016</h3> </header>
  </nav>
  <section class="w-two-thirds fl vh-100 ov-y-scroll bg-white">
    <!-- place content of `component.html` here -->
  </section>
</div>
=======
<!-- sidebar option 1 -->
<section class="sidebar">
  <h1 class="f1 fw-m">Sidebar</h1>
</section>
<!-- sidebar -->
<section class="fixed w-third top-0 left-0 vh-100 ov-y-scroll fll bg-ghost-white">
<header class="pl3">
  <h1 class="f1 fw-m">Sidebar</h1>
</header>
</section>
<!-- main content -->
<main class="w-two-third fll vh-100">
<h3 class="f3 fw-b">Main</h3>
</main>
>>>>>>> e89876dabe2b6ec6ed9cf096fb64d183b60071d2
```

<iframe style="width: 100%; height: 300px; border: none"
src="http://jsfiddle.net/z9gde7g5/embedded/"></iframe>


## Links
Maybe a link to how to enable filter on list elements?
