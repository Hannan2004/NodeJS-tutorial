const textArea = document.getElementById("text_to_generate");
const submitButton = document.getElementById("generate-button");
const generatedImage = document.getElementById("generated_image");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
    const textarea = e.target;

    if (textarea.value.length > 10 && textArea.value.length < 100) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function submitData(e) {
    submitButton.classList.add("submit-button--loading");

    const text_to_generate = textArea.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "text_to_generate": text_to_generate
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

   fetch('/generate', requestOptions)
    .then((response) => response.text())
    .then(imagePath => {
        console.log('Received image path:', imagePath);
        generatedImage.src = imagePath;
        generatedImage.style.display = 'block';
        submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
        console.error('Error:',error);
        submitButton.classList.remove("submit-button--loading");
    });
}