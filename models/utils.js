module.exports.capitalize = (str) => {
  str = str.trim().charAt(0).toUpperCase() + str.substring(1);
  if (str.split(" ").length === 1) return String;

  let finalString = "";
  str.split(" ").forEach((word) => {
    finalString += word.charAt(0).toUpperCase() + word.substring(1) + " ";
  });

  return finalString.trim();
};
