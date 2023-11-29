const BASE_TOKENS = {

    color: {
        blue: {
            100: '#E9F2FF',
            200: '#CCE0FF',
            300: '#85B8FF',
            400: '#579DFF',
            500: '#388BFF',
            600: '#1D7AFC',
            700: '#0C66E4',
            800: '#0055CC',
            900: '#09326C',
            1000: '#082145'
        },
        gray: {
            50: '#FFFFFF',
            75: '#FDFDFD',
            100: '#F8F8F8',
            200: '#E6E6E6',
            300: '#D5D5D5',
            400: '#B1B1B1',
            500: '#909090',
            600: '#6D6D6D',
            700: '#464646',
            800: '#222222',
            900: '#000000',
        },
        red: {
            100: '#BF2600'
        }
    },
    spacing: {
        S: 8,
        M: 12,
        L: 16,
        XL: 32,
    },
    radius: {
        XS: 2,
        S: 4,
        M: 8,
    },
    typography: {
        regular: 'NotoSans-Regular',
        semibold: 'NotoSans-Medium',
        bold: 'NotoSans-Bold'
    }

}

export const DESIGN_TOKENS = {

    text: {
        greeting: {
            color: {
                general: BASE_TOKENS.color.gray[600],
                highlight: BASE_TOKENS.color.blue[900],
            },
            font: BASE_TOKENS.typography.regular
        },
        hero: {
            color: BASE_TOKENS.color.gray[700],
            font: BASE_TOKENS.typography.regular
        },
        heading: {
            color: BASE_TOKENS.color.blue[900],
            font: BASE_TOKENS.typography.regular
        },
        subheading: {
            color: BASE_TOKENS.color.blue[900],
            font: BASE_TOKENS.typography.bold
        },
        paragraph: {
            color: BASE_TOKENS.color.gray[600],
            font: BASE_TOKENS.typography.regular
        },
        label: {
            color: BASE_TOKENS.color.gray[600],
            font: BASE_TOKENS.typography.bold
        },
        helper: {
            color: BASE_TOKENS.color.gray[0],
            font: BASE_TOKENS.typography.regular
        },
        'small-copy': {
            color: BASE_TOKENS.color.gray[600],
            font: BASE_TOKENS.typography.regular
        },
        'bold-small-copy': {
            color: BASE_TOKENS.color.gray[700],
            font: BASE_TOKENS.typography.semibold
        }
    },
    button: {
        standard: {
            paddingHorizontal: BASE_TOKENS.spacing.M,
            paddingVertical: BASE_TOKENS.spacing.S,
            radius: BASE_TOKENS.radius.S
        },
        fab: {
            padding: BASE_TOKENS.spacing.S,
            radius: BASE_TOKENS.radius.S
        },
        font: BASE_TOKENS.typography.bold,
        default: {
            background:{
                normal: BASE_TOKENS.color.gray[0],
                hover: BASE_TOKENS.color.gray[800],
                pressed: BASE_TOKENS.color.gray[900],
            }
        },
        main:{
            background:{
                normal: BASE_TOKENS.color.blue[700],
                hover: BASE_TOKENS.color.blue[800],
                pressed: BASE_TOKENS.color.blue[900],
            },
            text: {
                color: {
                    default: BASE_TOKENS.color.gray[50]
                }
            }
        }
    },
    input: {
        standard: {
            paddingHorizontal: BASE_TOKENS.spacing.M,
            paddingVertical: BASE_TOKENS.spacing.S,
            radius: BASE_TOKENS.radius.M,
            border: BASE_TOKENS.color.gray[200],
            background: BASE_TOKENS.color.gray[50],
            color: BASE_TOKENS.color.gray[600]
        }
    },
    'bottom-nav': {
        background: BASE_TOKENS.color.gray[50],
        padding: {
            vertical: 24
        },
        margin: {
            horizontal: BASE_TOKENS.spacing.L
        },
        border: {
            width: 1
        },
        tab: {
            label: {
                color: {
                    idle: BASE_TOKENS.color.gray[600],
                    active: BASE_TOKENS.color.blue[700],
                },
                font: {
                    idle: BASE_TOKENS.typography.regular,
                    active: BASE_TOKENS.typography.semibold
                }
            },
            icon: {
                color: {
                    idle: BASE_TOKENS.color.gray[600],
                    active: BASE_TOKENS.color.blue[700],
                },
            }
        }
    },
    border: {
        color: BASE_TOKENS.color.gray[200]
    },
    divider: {
        margin: {
            bottom: BASE_TOKENS.spacing.L
        }
    },
    card: {
        background: {
            regular: BASE_TOKENS.color.gray[50],
            muted: BASE_TOKENS.color.gray[75],
        },
        text: {
            color: {
                muted: BASE_TOKENS.color.gray[600]
            }
        },
        border: BASE_TOKENS.color.gray[200],
        paddingHorizontal: BASE_TOKENS.spacing.M,
        paddingVertical: BASE_TOKENS.spacing.S,
        radius: BASE_TOKENS.radius.M,
        marginBottom: BASE_TOKENS.spacing.L
    }
    

}