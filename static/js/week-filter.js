// Get the requesed weeks
const originalList = Array.from(document.getElementById("week-links").children)
  .filter(node => node.id.match(/^week-\d+$/))
  .map(node => {
    return { week: Number(node.id.split("-")[1]), node: node };
  });
let request = document.getElementById("week_filter");
let generateWeeks = compose(
  displayWeeks,
  uniqueWeeks,
  lst => lst.map(getRanges),
  allWeeks,
  cleanText
);
request.oninput = () => generateWeeks(request.value);

// removes unnecessary space and commas in the input
function cleanText(text) {
  const clean = text
    .replace(/\s+/g, "") // remove spaces
    .replace(/,+/g, ",") // `,,,` -> `,`
    .replace(/-+/g, "-") // `---` -> `-`
    .replace(/[^\d,-.]/g, "") // filter out chars not allowed
    .replace(/[.]+/g, ","); // `...` -> `,`
  // TODO: why ^
  return clean;
}

// from a text of the weeks,
// removes all the empty weeks & returns a list of the weeks
function allWeeks(text) {
  const allInput = text.split(",");
  const weekList = allInput.filter(v => !(v === ""));
  return weekList;
}

// turns x-y to the integer values x, x+1 ,..., y
function getRanges(text) {
  // function to return lower - upper
  const ranged = (lower, upper) =>
    Array.apply(null, Array(upper - lower + 1)).map((_, i) => lower + i);
  let bounds = text.split("-").map(Number);
  // if single int, return the int
  if (bounds.length === 1) {
    return bounds;
  }
  // incorrect syntax
  if (bounds.length > 2) {
    return [];
  }
  // check that the range they input isn't too wild
  const size = Math.abs(bounds[0] - bounds[1]);
  const weeksInSchoolYear = 24;
  const maxClassesPerWeek = 4; // 3 lectures + 1 tutorial
  const maxLectures = weeksInSchoolYear * maxClassesPerWeek;
  if (size > maxLectures) {
    return [];
  }
  // swap upper & lower bound if they are out of order
  if (bounds[1] < bounds[0]) {
    return ranged(bounds[1] || 0, bounds[0] || 0);
  } else {
    return ranged(bounds[0] || 0, bounds[1] || 0);
  }
}

// gets all the unique weeks
// lazy method! just turn it in to a set l0l
function uniqueWeeks(weekList) {
  const flatten = arr =>
    arr.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
      []
    );
  let all_weeks = Array.from(new Set(flatten(weekList)));
  return all_weeks;
}

// display the wanted weeks
function displayWeeks(weekNumbers) {
  let linksList = Array.from(document.getElementById("week-links").children)
    .filter(node => node.id.match(/^week-\d+$/))
    .map(node => {
      return { week: Number(node.id.split("-")[1]), node: node };
    });
  // if empty, return all the weeks
  if (weekNumbers.length === 0) {
    originalList.forEach(link => $(link.node).show());
  } else {
    // else, return selected ones
    linksList.forEach(link => {
      if (weekNumbers.indexOf(link.week) > -1) {
        $(link.node).show();
      } else {
        $(link.node).hide();
      }
    });
  }
}
