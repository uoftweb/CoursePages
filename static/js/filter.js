/*
 * Composes functions together, like so
 *
 * ```
 * > const f = compose(f1, f2, f3, f4)
 * > const result = f(1)
 * > result === f1(f2(f3(f4(x))))
 * true
 * ```
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

/*
 * Initialize a list of the list elements under the id
 * 'sidebar-search'
 *
 * () => a tree of {text, node, children}, rooted with a fake node that has property
 * `isRoot`
 */
const initSideBarList = () => {
  const root = { text: "", node: null, isRoot: true, children: [] };
  const makeTree = (parentNode, html, nodeIdentFn) => {
    if (!(html.children.length > 0)) {
      if (nodeIdentFn(html)) {
        parentNode.children.push({
          text: html.text,
          node: html,
          isRoot: false
        });
      }
      return parentNode;
    }
    if (parentNode.text === "") {
      parentNode.text = html.children[0].text || "";
    }
    if (html.children.length === 0) {
      return parentNode;
    }
    // // this node has children, recursively `makeTree`
    // let thisParent = { text: "", node: idk, isRoot: false }
    for (let i = 0; i < html.children.length; i++) {
      makeTree(parentNode, html.children[i], nodeIdentFn);
    }
    return parentNode;
  };

  const nodeIdentifier = node => {
    return node.className.split(" ").indexOf("sidebar__list--link") > -1;
  };

  const tree = makeTree(
    root,
    document.getElementById("sidebar-search"),
    nodeIdentifier
  );
  return root;
};

/*
 * Filter `originalList` (a list of {text, li}) based on
 * `text`
 *
 * ({text: string, li: LI}[], string) => LI[]
 */
const filterSideBarList = (originalList, text) => {
  // don't filter on inputs less than three characters, since
  // we return too much that the user might not be looking for
  if (text.length < 2) {
    return originalList.map(li => li.li);
  }

  // filter out the elements from `originalList` that match `text`, and
  // then grab the li tags from each element
  const newli = originalList
    .filter(li => li.text.toLowerCase().search(text.toLowerCase()) >= 0)
    .map(li => li.li);

  // if nothing matches, return the original list
  if (newli.length === 0) {
    return originalList.map(li => li.li);
  }
  return newli;
};

/*
 * Replace the list in `sidebar-search` with
 * the contents of `newLi`
 *
 * LI[] => none
 */
const replaceSideBarList = newLi => {
  let ul = document.getElementById("sidebar-search");
  ul.innerHTML = "";
  for (let i = 0; i < newLi.length; i++) {
    ul.appendChild(newLi[i]);
  }
};

window.onload = () => {
  // get a list representing the sidebar
  const sideBarList = initSideBarList();

  // gets text field data when called
  const getInput = () => document.getElementById("sidebar-input").value;

  // this is where the user inputs text
  const sideBarInput = document.getElementById("sidebar-input");

  // calls filterSideBarList and passes its return to replaceSideBarList
  const generateSideBar = compose(replaceSideBarList, () =>
    filterSideBarList(sideBarList, getInput()));

  // Whenever a keypress/keydown happens we generate a new sidebar.
  sideBarInput.oninput = () => generateSideBar();
};
