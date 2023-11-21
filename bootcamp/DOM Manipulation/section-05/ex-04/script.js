document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    const bar = document.querySelector('.bar');

    window.addEventListener('scroll', () => {
        progressBar.style.display = 'block';
    })

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        console.log(window.innerHeight);
        const scrolled = (window.scrollY / scrollHeight) * 100;
        bar.style.width = `${scrolled}%`;
    })
})