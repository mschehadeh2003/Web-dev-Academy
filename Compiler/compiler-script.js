$(document).ready(function() {
    let currentPreview = '';
    
    
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
    });
 
    
    const savedHtml = localStorage.getItem('savedHtml');
    if (savedHtml) {
        $('#htmlCode').val(savedHtml);
    }
 
    
    $('#htmlCode').on('input', function() {
        localStorage.setItem('savedHtml', $(this).val());
    });
 
    
    $('#runBtn').click(function() {
        currentPreview = $('#htmlCode').val();
        updatePreview();
    });
 
    
    $('#clearBtn').click(function() {
        $('#htmlCode').val('');
        currentPreview = '';
        updatePreview();
        localStorage.removeItem('savedHtml');
    });
 
    function updatePreview() {
        const iframe = $('#preview')[0];
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(currentPreview);
        iframeDoc.close();
    }
 });