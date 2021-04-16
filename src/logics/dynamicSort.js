export const dynamicSort = (property) => {
  if (property === "id") {
    return function (a, b) {
      return -(a.id - b.id || a.name.localeCompare(b.name))
    }
  } else {
    let sortOrder = 1

    if (property[0] === "-") {
      sortOrder = -1
      property = property.substr(1)
    }

    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property])
      } else {
        return a[property].localeCompare(b[property])
      }
    }
  }
}
