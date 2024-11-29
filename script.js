$(document).ready(function() {
    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('nav').length) {
            $('.nav-links').removeClass('active');
        }
    });

    // Store last visited page in localStorage
    $('.nav-links a').click(function() {
        localStorage.setItem('lastVisited', $(this).attr('href'));
    });

    // Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop();
    $('.nav-links a').each(function() {
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('active');
        }
    });
});

let searchContent = {
    'html-tutorial.html': {
        keywords: ['html', 'elements', 'tags', 'structure', 'markup'],
        title: 'HTML Tutorial'
    },
    'css-tutorial.html': {
        keywords: ['css', 'styles', 'selectors', 'flexbox', 'layout'],
        title: 'CSS Tutorial'
    },
    'js-tutorial.html': {
        keywords: ['javascript', 'programming', 'dom', 'events', 'jquery'],
        title: 'JavaScript Tutorial'
    },
    'compiler.html': {
        keywords: ['editor', 'code', 'compile', 'run', 'preview'],
        title: 'Code Editor'
    }
};

$(document).ready(function() {
    // Existing ready code...

    // Search toggle
    $('.search-toggle').click(function(e) {
        e.stopPropagation();
        $('.search-container').toggleClass('active');
        if ($('.search-container').hasClass('active')) {
            $('#searchInput').focus();
        }
    });

    // Close search on outside click
    $(document).click(function(event) {
        if (!$(event.target).closest('.search-container, .search-toggle').length) {
            $('.search-container').removeClass('active');
        }
    });

    // Search functionality
    $('#searchInput').on('input', function() {
        const query = $(this).val().toLowerCase();
        const results = [];
        
        if (query.length < 2) {
            $('.search-results').empty();
            return;
        }

        Object.entries(searchContent).forEach(([page, content]) => {
            if (content.keywords.some(keyword => keyword.includes(query)) ||
                content.title.toLowerCase().includes(query)) {
                results.push(`
                    <div class="search-result" data-page="${page}">
                        <div>${content.title}</div>
                        <small>${content.keywords.join(', ')}</small>
                    </div>
                `);
            }
        });

        $('.search-results').html(results.join(''));
    });

    // Handle search result clicks
    $(document).on('click', '.search-result', function() {
        const page = $(this).data('page');
        window.location.href = page;
    });
});