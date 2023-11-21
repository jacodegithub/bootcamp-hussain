function showTab() {
    const tabData = document.querySelectorAll('.tab-data');

    const tabHeads = document.querySelectorAll('.tab-head')

    tabHeads.forEach(head => {
        head.addEventListener('click', (e) => {
            if(head.textContent === 'Tab1') {
                console.log(head.textContent)
                utility(tabData, head.textContent);
            }
            else if(head.textContent === 'Tab2') {
                utility(tabData, head.textContent);
            }
            else {
                utility(tabData, head.textContent);
            }
        })
    })

}

function utility(tabData, tab) {
    tabData.forEach(t => {
        // console.log(t.id)
        if(t.id === tab) {
            t.style.display = "block";
        }
        else {
            t.style.display = 'none';
        }

    })
}

showTab();