import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    color: {
        gray: {
            '900': '#181b23',
            '800': '#1f2029',
            '700': '#353646',
            '600': '#4b4c63',
            '500': '#616480',
            '400': '#797d9a',
            '300': '#9699b0',
            '200': '#b3b5c6',
            '100': '#d1d2dc',
            '150': '#5A5A5A',
            '50': '#eeeef2',
        }
    },
    fonts: {
        heading: 'Lato',
        body: 'Lato'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.150'
            }
        }
    }
})