document.addEventListener('DOMContentLoaded', function() {
    const all_containers = document.querySelectorAll('.content-container')

    all_containers.forEach(container => {
        container.addEventListener('click', function() {
            container.classList.toggle('active');
        })
    })
})