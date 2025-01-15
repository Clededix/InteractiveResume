// duration of animation in regards of texte length
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.element');
    const textLength = element.textContent.length; //stocke le nombre de char
    const typingDuration = textLength * 0.1;

    element.style.animationDuration = `${typingDuration}s`;
});
