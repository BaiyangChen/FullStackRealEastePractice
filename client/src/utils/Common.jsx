export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
}

export const formatPrice = (price) => {
    const PriceCAD = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
    return PriceCAD;
};