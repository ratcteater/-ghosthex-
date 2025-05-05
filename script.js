// সার্চ ফাংশনালিটি
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    filterLinks(searchTerm);
});

document.getElementById('search-input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        filterLinks(searchTerm);
    }
});

function filterLinks(searchTerm) {
    const cards = document.querySelectorAll('.link-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ক্যাটাগরি ফিল্টারিং
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // সব বাটন থেকে active ক্লাস রিমুভ
        categoryBtns.forEach(b => b.classList.remove('active'));
        // ক্লিক করা বাটনে active ক্লাস অ্যাড
        this.classList.add('active');
        
        const category = this.textContent;
        filterByCategory(category);
    });
});

function filterByCategory(category) {
    const cards = document.querySelectorAll('.link-card');
    
    if (category === 'ALL') {
        cards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
   
}