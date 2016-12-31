const initSideBarList = () => {
  const ul = document.getElementById('sidebar-search')
  const nodes = []
  // get all the nodes
  for (let i = 0, len = ul.childNodes.length; i < len; i++) {
    if (ul.childNodes[i].nodeName === 'LI') {
      nodes.push(ul.childNodes[i])
    }
  }
  const li = nodes
    .map(x => {return { text: x.innerText, li: x }})

  // let's traverse
  return li
}

const filterSideBarList = (originalList, text) => {
  // let's not filter things less than 3 characters
  if (text.length < 2) {
    return originalList.map(li => li.li)
  }
  const newli = originalList
    .filter(li => li.text.toLowerCase().search(text.toLowerCase()) >= 0)
    .map(li => li.li)

  // if nothing matches, we might as well give the old one
  if (newli.length === 0) {
    return originalList.map(li => li.li)
  }
  return newli
}

const replaceSideBarList = (newLi) => {
  let ul = document.getElementById('sidebar-search')
  ul.innerHTML = ""
  for (let i = 0; i < newLi.length; i++) {
    ul.appendChild(newLi[i])
  }
}

const getSideBarLoop = (constantLiList) => {
  return (keypress) => {
    const input = document.getElementById('sidebar-input')

    // get a char or a backspace
    const code = keypress.charCode || keypress.keyCode
    const nextChar = String.fromCharCode(keypress.charCode) || ""
    const prevString = input.value || ""
    let nextString = prevString + nextChar
    // backspace
    if (code === 8) {
      nextString = prevString.slice(0,prevString.length - 1)
    }

    const newLi = filterSideBarList(constantLiList, nextString)

    replaceSideBarList(newLi)

    return true
  }
}
window.onload = () => {
  const sideBarListElements = initSideBarList()
  const sideBarLoop = getSideBarLoop(sideBarListElements)
  // const sideBarListElements = initSideBarList()
  const sideBarInput = document.getElementById('sidebar-input')
  sideBarInput.onkeypress = keypress => sideBarLoop(keypress)
  sideBarInput.onkeydown = keydown => sideBarLoop(keydown)
  // sideBarInput.onKeyDown(a => replaceSideBarList(filterList(sideBarListElements, a)))
}
