import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        margin: '0 10% 0 10%',
        padding: "0 30% 0 35%"
      }
    },
    MuiCard: {
        root: {
            padding: '1%',
            marginTop: '10px'
        }
    },
    MuiGrid: {
        item: {
            marginBottom: '15px'
        }
    },
    MuiTypography: {
        root: {
            padding: '3px',
        },
        h5: {
            fontWeight: 'bold',
            color: "#438a5e"
        }
    }
  }
});

export default theme;
