export default function ReplaceString(string) {
  const lowerCaseString = string.toLowerCase();
  const replacedString = lowerCaseString.replace(/[^a-z0-9]/g, '');
  return replacedString;
}
