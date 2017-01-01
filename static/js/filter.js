/*
 * Initialize a list of the list elements under the id
 * 'sidebar-search'
 *
 * () => {text: string , li: LI}[]
 */
const initSideBarList = () => {
  // get the sidebar
  const ul = document.getElementById('sidebar-search')

  const nodes = []

  // get all the list elements in the sidebar
  for (let i = 0, len = ul.childNodes.length; i < len; i++) {
    if (ul.childNodes[i].nodeName === 'LI') {
      nodes.push(ul.childNodes[i])
    }
  }

  // capture the text from each element so that we can reference
  // it with `.text`
  const liElements = nodes
    .map(x => { return { text: x.innerText, li: x } })

  return liElements
}

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
    return originalList.map(li => li.li)
  }

  // filter out the elements from `originalList` that match `text`, and
  // then grab the li tags from each element
  const newli = originalList
    .filter(li => li.text.toLowerCase().search(text.toLowerCase()) >= 0)
    .map(li => li.li)

  // if nothing matches, return the original list
  if (newli.length === 0) {
    return originalList.map(li => li.li)
  }
  return newli
}

/*
 * Replace the list in `sidebar-search` with
 * the contents of `newLi`
 *
 * LI[] => none
 */
const replaceSideBarList = (newLi) => {
  let ul = document.getElementById('sidebar-search')
  ul.innerHTML = ''
  for (let i = 0; i < newLi.length; i++) {
    ul.appendChild(newLi[i])
  }
}

/*
 * Return a function that takes in a keypress and
 * and replaces the sidebar based on the result of the keypress
 *
 * Note that this does not mutate `constantLiList`
 *
 * {text: string, li: li}[] => (char => bool)
 */
const getSideBarHandler = (constantLiList) => {
  return (keypress) => {
    const input = document.getElementById('sidebar-input')

    // get a char or a backspace
    const code = keypress.charCode || keypress.keyCode
    const nextChar = String.fromCharCode(keypress.charCode) || ''
    const prevString = input.value || ''
    let nextString = prevString + nextChar
    // backspace
    if (code === 8) {
      nextString = prevString.slice(0, prevString.length - 1)
    }

    const newLi = filterSideBarList(constantLiList, nextString)

    replaceSideBarList(newLi)

    return true
  }
}

window.onload = () => {
  // get a data structure representing the sidebar
  const sideBarList = initSideBarList()

  // sideBarHandler returns a function that uses `sideBarList`
  const sideBarHandler = getSideBarHandler(sideBarList)

  // this is where the user inputs text
  const sideBarInput = document.getElementById('sidebar-input')

  // Whenever a keypress/keydown happens, we pass it into the `sideBarHandler`
  sideBarInput.onkeypress = keypress => sideBarHandler(keypress)
  sideBarInput.onkeydown = keydown => sideBarHandler(keydown)
}
