$('#nav-toggle').on('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    $('#overlayC').toggle("close open")
});
