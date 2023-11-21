document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea')
    const charCountEle = document.querySelector('#char-count')
    // console.log(textarea)
    textarea.addEventListener('input', () => {
        const charCount = textarea.value.replace(/\s/g, '').length;
        charCountEle.textContent = charCount;
    })
})