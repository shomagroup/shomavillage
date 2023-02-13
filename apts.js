(function() {
    var fsComponent = new FsLibrary('.fp-desktop')
    var myFilters = [{
        filterWrapper: '.filter-desk',
        filterType: 'multi',
    }]

    fsComponent.filter({
        filterArray: myFilters,
        activeClass: '.filter-b-active',
    })
})();

// immediately/self invoked function. This function executes right away
(function() {
    // create a new Library instance and store it in a variable called "fsComponent"
    var fsComponent = new FsLibrary('.fp-mobile') // Collection List class

    // run the loadmore Library component on your instance
    fsComponent.loadmore({
        button: '.load-more', // class of Webflow Pagination button
        loadAll: false, // loads ALL items in your pagination list after the page loads
        resetIx: false, // reset webflow ix
    })

    // define filter groups in an array and store it in a variable called myFilters
    var myFilters = [{
        filterWrapper: '.filter-mobile', // parent wrapper of filter group
        filterType: 'multi'
    }]

    // run the filter Library component on your instance
    fsComponent.filter({
        filterArray: myFilters, // variable of the array we created above
        activeClass: '.filter-b-active', // class that styles the active state
        animation: {
            enable: true,
            duration: 350,
            easing: 'ease',
            effects: 'fade scale(1.02)'
        }
    })
})();