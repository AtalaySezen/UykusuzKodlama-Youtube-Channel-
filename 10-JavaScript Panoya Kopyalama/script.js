let textInput = document.getElementById("myText");

const copyContent = async () => {
  try {
    navigator.clipboard.writeText(textInput.value);
  } catch (err) {
    console.log("Bir hata oluştu", err);
  }
};
