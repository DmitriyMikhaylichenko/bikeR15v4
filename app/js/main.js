// ==========mobile-nav===============================
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});
// =============rating======================================
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);

// ============================================================
$(function () {

})