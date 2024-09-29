
export const FORMATS = ['jpg', 'png', 'bmp', 'jpeg', 'tiff', 'pdf', 'doc', 'docx'];
export const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2000000;
export const NAVIGATION = [
    {
        href: "/profile",
        name: "Profile",
    },
    {
        href: "/personal",
        name: "Personal",
    },
    {
        href: "/notification",
        name: "Notifications",
    },
    {
        href: "/wishlist",
        name: "Wishlist",
    },
    {
        href: "/help",
        name: "Help",
    },

]

export const COMMON_SETTINGS = (customSettings) => ({
    infinite: customSettings.infinite || false,
    speed: 500,
    arrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: customSettings.dots1024 || false,
                slidesToShow: customSettings.slidesToShow1024 || 1,
                slidesToScroll: 1,
                infinite: true,
                arrow: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                dots: customSettings.dots600 || false,
                slidesToShow: customSettings.slidesToShow600 || 1,
                slidesToScroll: 1,
                arrow: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                dots: customSettings.dots480 || false,
                arrow: false,
                slidesToShow: customSettings.slidesToShow480 || 1,
                slidesToScroll: 1,
                centerMode: customSettings.centerMode480 || false,
                centerPadding: customSettings.centerPadding480 || '0px',
            },
        },
    ],
    ...customSettings,
});