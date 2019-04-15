/**
* Main theme configuration file
*
* NOTICE: All information contained herein is, and remains
* the property of Embitel Technologies (I) Pvt. Ltd.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Embitel Technologies (I) Pvt. Ltd.
*
* @category  Embitel
* @package   Embitel\Core
* @author    Yaramala Reddy <yaramala.reddy@embitel.com>
* @copyright 2015-2018 Embitel technologies (I) Pvt. Ltd. All rights reserved.
*/

import { createMuiTheme } from '@material-ui/core/styles';

//*******************************************************************/
// Main theme configuration of Material UI is provided below.
//*******************************************************************/
const palette = {
    common: {
        "black": "#000",
        "white": "#fff",
    },
    primary: {
        "main": "#fffff",
        "light": "#64b5f6",
        "dark": "#1976d2",
        "contrastText": "#fff"
    },
    secondary: {
        "main": "rgb(225, 0, 80)",
        "light": "rgb(231, 51, 115)",
        "dark": "rgb(157, 0, 56)",
        "contrastText": "#fff"
    },
    error: {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
    },
    grey: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        "A100": "#d5d5d5",
        "A200": "#aaaaaa",
        "A400": "#303030",
        "A700": "#616161"
    },
}
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    //Border Properties to be used set at Theme level.
    borderProperties: {
        primary: {
            margin: 15,
            padding: 15,
            transition: 'transform .2s',
            border: '1px solid blue',
            boxShadow: '10px 10px 8px #888888',
            '&:hover': {
                border: '1px outset #A9A9A9',
                transform: 'scale(1.05)',
            },
        },
        secondary: {
            margin: 15,
            padding: 15,
            transition: 'transform .2s',
            border: '1px solid red',
            '&:hover': {
                border: '1px outset #A9A9A9',
                transform: 'scale(1.05)',
            },
        }
    },
    overrides: {
        //Over ride for Material UI button.
        MuiButton: {
            root: {
                border: 0,
                color: palette.primary.main,
            },
            flat: {
                color: palette.primary.main,
            },
            flatPrimary: {
                color: palette.primary.main,
            },
            flatSecondary: {
                color: palette.secondary.main,
            },
            label: {

            },
            text: {

            },
            textPrimary: {
                color: palette.primary.main,
            },
            textSecondary: {

            },
            outlined: {

            },
            outlinedPrimary: {
                borderColor: palette.primary.main,
            },
            outlinedSecondary: {

            },
            contained: {

            },
            containedPrimary: {
                backgroundColor: palette.primary.main,
                boxShadow: 'none',
            },
            containedSecondary: {

            },
            raised: {

            },
            raisedPrimary: {

            },
            raisedSecondary: {

            },
            fab: {

            },
            extendedFab: {

            },
            focusVisible: {

            },
            disabled: {

            },
            colorInherit: {

            },
            mini: {

            },
            sizeSmall: {

            },
            sizeLarge: {

            },
            fullWidth: {

            }
        },
        //Over ride for Material UI Icon button.
        MuiIconButton: {
            root: {
                color: palette.grey["600"],
            },
            colorPrimary: {
                color: palette.primary.main,
            },
            colorSecondary: {
                color: palette.secondary.main,
            },
            colorInherit: {

            },
            disabled: {

            },
            label: {

            }
        },
        //Over ride for Material UI Svg Icon.
        MuiSvgIcon: {
            root: {
                color: palette.grey["600"],
            },
            colorPrimary: {
                color: palette.primary.main,
            },
            colorSecondary: {
                color: palette.common.white,
            },
            colorAction: {
                color: palette.grey["600"],
            },
            colorError: {

            },
            colorDisabled: {

            },
            fontSizeInherit: {
                fontSize: 60,
            }
        },
        MuiBadge: {
            root: {
            },
            badge: {
                width: 20,
                height: 20,
            },
            colorPrimary: {
                backgroundColor: palette.primary.main,
            }
        },
        MuiAppBar: {
            root: {
            },
            colorPrimary: {
                backgroundColor: palette.common.white,
            }
        },
        MuiInput: {
            root: {
            },
            underline: {
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: '2px solid #000',
                },
                '&:after': {
                    borderBottom: '2px solid #000',
                },
            }
        },
        MuiStepConnector: {
            lineHorizontal: {
                borderTopWidth: '5px',
            },
            line: {
                borderColor: '#e0e0e0',
            }
        },
        MuiStepIcon: {
            root: {
                '&$active': {
                    color: palette.primary.main,
                },
                '&$completed': {
                    color: palette.primary.main,
                }
            }
        },
        MuiRadio: {
            root: {
                '&$checked': {
                    color: palette.primary.main,
                },
            },
            colorPrimary: {
                '&$checked': {
                    color: palette.primary.main,
                },
            }
        },
        MuiTypography: {
            colorPrimary: {
                color: palette.primary.main,
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: palette.primary.main,
                }
            }
        },
        MuiCard: {
            root: {

            }
        }

    },
});
export default theme;

// .MuiStepIcon-root-54.MuiStepIcon-active-56