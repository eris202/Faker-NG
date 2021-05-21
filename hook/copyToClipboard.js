function copyToClipboard({
  elem,
  raw = false,
  alert,
  message = "Text copied to clipboard",
}) {
  /* Get the text field */

  let content = elem;

  if (!raw) {
    const copyText = document.getElementById(elem);
    content = copyText.innerText;
  }

  var input = document.createElement("input");
  input.setAttribute("value", content);
  document.body.appendChild(input);

  /* Select the text field */
  input.select();
  input.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.body.removeChild(input);
  alert.success(message);
}

export default copyToClipboard;
