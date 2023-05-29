import React from 'react'

const DetailShare = ({ title, pathname }) => {
    const linkUrl = `https://abayomi-recipe-app-test.vercel.app${pathname}`;
    const linkTitle = encodeURIComponent(title);

    return (
        <div className='mt-6'>
            <p className='text-primary font-bold text-sm lg:text-sm-15'>
                Share link on social media
            </p>

            <div className='mt-2 flex flex-row items-center space-x-3'>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://www.facebook.com/sharer/sharer.php?u=${linkUrl}&title=${linkTitle}`}
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0669C22 4.95335 17.0766 0 11 0C4.92339 0 0 4.95335 0 11.0669C0 16.5906 4.02254 21.1691 9.28125 22V14.2661H6.48689V11.0669H9.28125V8.62864C9.28125 5.85521 10.9224 4.32325 13.436 4.32325C14.6398 4.32325 15.8985 4.53923 15.8985 4.53923V7.26134H14.5111C13.145 7.26134 12.7187 8.11456 12.7187 8.98965V11.0669H15.7695L15.2816 14.2661H12.7187V22C17.9775 21.1691 22 16.5906 22 11.0669Z" fill="#1373E8" />
                    </svg>
                </a>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://twitter.com/intent/tweet?url=${linkUrl}&text=${linkTitle}`}
                >
                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.3021 3.42637 23.4295 4.33052 22.4302 5.06025Z" fill="#1C94E5" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default DetailShare