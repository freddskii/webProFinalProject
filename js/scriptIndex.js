document.addEventListener('DOMContentLoaded', () => {
    const postFeed = document.getElementById('post-feed');
    const contentArea = document.querySelector('.content');
    let isLoading = false;
    let page = 1;

    const fetchPosts = (currentPage) => {
        const newPosts = [];
        for (let i = 0; i < 5; i++) {
            const postNumber = (currentPage - 1) * 5 + i + 1;
            const isLarge = Math.random() > 0.7;

            newPosts.push({
                id: `post-${postNumber}`,
                title: `Post ${postNumber}`,
                content: `This is the content for Post ${postNumber}. It demonstrates infinite scrolling.`,
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
            postElement.innerHTML = `<h4>${post.title}</h4><p>${post.content}</p>`;
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
        }, 0);
    };

    contentArea.addEventListener('scroll', () => {
        
        const scrollThreshold = 100; 
        
        if (contentArea.scrollHeight - contentArea.scrollTop <= contentArea.clientHeight + scrollThreshold) {
            loadMorePosts();
        }
    });

    loadMorePosts(); 
});