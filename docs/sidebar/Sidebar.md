# Sidebar

## HTML

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
```
<style>
.page {
  width: 100%;
  height: 350px;
  border: 1px solid black;
}
.w-third { width: 33%; }
.w-two-third { width: 66%; }
.top-0 { top: 0 }
.left-0 { left: 0 }
.h-100 { height: 100%; }
.fl-l { float: left; }
.bg-ghost-white { background-color: #F8F8FF; }
.f3 { font-size: 2rem; }
.fw-b { font-weight: 700 }
.fw-m { font-weight: 500 }
.ph3 { padding-right: .5rem; padding-left: .5rem; }
</style>

<div class="page">
<div class="fixed w-third top-0 left-0 h-100 fll bg-ghost-white">
<p class="f2 fw-m ph3">Title</p>
</div>
<div class="w-two-third fll vh-100">
<p class="f3 fw-b pl3">Main</p>
</div>
</div>

## Links
Maybe a link to how to enable filter on list elements?
