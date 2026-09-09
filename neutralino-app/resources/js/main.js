// NeutralinoJS main script
// Opens selected HTML files in the app window

function openModule(url) {
  if (window.NL) {
    NL.open(url);
  } else {
    window.location.href = url;
  }
}
