<script>
    // Function to handle intersection events
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };

    // Options for the observer (optional)
    const options = {
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Target all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(card => {
        observer.observe(card);
    });
</script>
