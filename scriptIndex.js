document.addEventListener('DOMContentLoaded', () => {
    const postFeed = document.getElementById('post-feed');
    let isLoading = false;
    let page = 1;

    const detailModal = document.getElementById('detailModal');
    if (detailModal) {
        detailModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');
            
            const modalTitle = detailModal.querySelector('#detailModalTitle');
            const modalBody = detailModal.querySelector('#detailModalBody');

            modalTitle.textContent = title;
            modalBody.textContent = content;
        });
    }

    const fetchPosts = (currentPage) => {
        const newPosts = [];
        for (let i = 0; i < 5; i++) {
            const postNumber = (currentPage - 1) * 5 + i + 1;
            const isLarge = Math.random() > 0.7;

            newPosts.push({
                id: `post-${postNumber}`,
                title: `Job ${postNumber}`,
                content: `This is the detailed description for Job ${postNumber}. It includes requirements, benefits, and roles.`,
                className: isLarge ? 'large' : ''
            });
        }
        return newPosts;
    };

    const renderPosts = (posts) => {
        const fragment = document.createDocumentFragment();

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = `post-card p-3 ${post.className}`; 
            
            postElement.innerHTML = `
                <div>
                    <h4>${post.title}</h4>
                    <p>${post.content}</p>
                </div>
                
                <div class="d-flex gap-2 justify-content-end mt-auto">
                    <button class="btn btn-primary btn-sm" 
                        data-bs-toggle="modal" 
                        data-bs-target="#detailModal"
                        data-title="${post.title}"
                        data-content="${post.content}">
                        View Detail
                    </button>

                    <button class="btn btn-success btn-sm" 
                        data-bs-toggle="modal" 
                        data-bs-target="#applyModal">
                        Apply
                    </button>
                </div>
            `;
            fragment.appendChild(postElement);
        });

        postFeed.appendChild(fragment);
    };

    const loadMorePosts = () => {
        if (isLoading) return;
        
        isLoading = true;
        
        setTimeout(() => {
            const posts = fetchPosts(page);
            renderPosts(posts);
            page++;
            isLoading = false;
        }, 500);
    };

    window.addEventListener('scroll', () => {
        if (isLoading) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrollThreshold = 100; 

        if (scrollHeight - scrollTop <= clientHeight + scrollThreshold) {
            loadMorePosts();
        }
    });

    loadMorePosts(); 
});