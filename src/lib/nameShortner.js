export function nameShortner(name) {
  let splitName = name.split(" ");
  let finalName = "";
  for (let i = 0; i < splitName.length; i++) {
    finalName = finalName.concat(splitName[i].toLocaleUpperCase().charAt(0));
  }
  return finalName;
}
