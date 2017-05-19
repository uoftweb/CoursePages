/*
 * applys the functions in order, chaining their results
 *
 * ```
 * > const f = apply(f1, f2, f3, f4)
 * > const result = f(1)
 * > result === f4(f3(f2(f1(x)))) 
 * True
 * ```
 */
const apply = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

function isSidebarItem(node) {
  return node.className.split(" ").indexOf("sidebar__list--item") > -1;
}

function sidebar(sidebarList) {
  const children = sidebarList.children;
  const nodes = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isSidebarItem(child))
      nodes.push({ html: child, text: [child.textContent.trim()] });
    else {
      const text = child.textContent
        .split("\n")
        .map(t => t.trim())
        .filter(text => text);
      nodes.push({ html: child, text: text });
    }
  }
  return nodes;
}

/*
 * Initialize a list of the list elements under the id
 * 'sidebar-search'
 *
 * () => {text: string , html: LI}[]
 */
const initSideBarList = () => {
  return sidebar(document.getElementById("sidebar-search"));
};

/*
 * Filter `originalList` (a list of {text, li}) based on
 * `text`
 *
 * ({text: string, li: LI}[], string) => LI[]
 */
const filterSideBarList = (originalList, searchText) => {
  // don't filter on inputs less than three characters, since
  // we return too much that the user might not be looking for
  if (searchText.length < 2) {
    originalList.forEach(node => $(node.html).show());
    return;
  }

  const hasSearchWord = listOfText =>
    listOfText.filter(
      text => text.toLowerCase().search(searchText.toLowerCase()) >= 0
    ).length > 0;

  // filter out the elements from `originalList` that match `text`, and
  // then grab the li tags from each element
  const newli = originalList.filter(node => hasSearchWord(node.text));

  // if nothing matches, return the original list
  if (newli.length === 0) {
    originalList.forEach(node => $(node.html).show());
    return;
  }

  originalList.forEach(node => {
    if (hasSearchWord(node.text)) $(node.html).show();
    else $(node.html).hide();
  });
};

window.onload = () => {
  // get a list representing the sidebar
  const sideBarList = initSideBarList();

  // gets text field data when called
  const getInput = () => document.getElementById("sidebar-input").value;
  const filter = input => filterSideBarList(sideBarList, input);
  const sidebarFilter = apply(getInput, filter);
  // Whenever a keypress/keydown happens we generate a new sidebar.
  document.getElementById("sidebar-input").oninput = () => sidebarFilter();
};

function toggleSideBar() {
  const button = $("#sidebarToggle");
  $(".sidebar").toggleClass("hide");
  if (button.text() === "◀") button.text("▶");
  else button.text("◀");
}
