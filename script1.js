var areatext = document.getElementById("areatext")
var counts = document.getElementById("counts")
var exceed = document.getElementById("exceed")
var characters = 200
var validation = false

areatext.addEventListener('input', function() {
    const currentLength = areatext.value.length;
    counts.textContent = `${currentLength}/${characters} characters`;

    if (currentLength >= characters) {
        if (!validation) {
            exceed.classList.remove("hidden"); 
            validation = true; 
        }
        messageInput.value = messageInput.value.slice(0, characters); 
        counter.textContent = `${characters}/${characters} characters`; 
    } else {
        exceed.classList.add("hidden"); 
        validation = false; 
    }
});