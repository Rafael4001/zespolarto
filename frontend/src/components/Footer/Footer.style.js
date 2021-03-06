import { withStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import { COLORS } from "../../colors";


const styles = (theme) => ({

  footerContainer: {
    backgroundColor: `${COLORS.red.medium}`,
    padding: '1rem 1rem 0.2rem 1rem ',

    [theme.breakpoints.up('md')]: {
      padding: '1rem',
    },
  },
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `#FFF`,
    },
    borderBottom: `0.0625rem solid ${COLORS.grey.dark_1}`,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
    justifyItems: 'center',

    [theme.breakpoints.up('sm')]: {
      padding: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  },
  socialMediaContainer: {
    background: COLORS.white.main,
    borderRadius: '100%',
    marginBottom: '1rem',
  },
  facebookIcon: {
    width: '2.5rem',
    height: '2.5rem',
  },

  socialLink: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    '& a': {
      textDecoration: 'none',
      color: `${COLORS.blue.main}`,
    },
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '2.3125rem',
    fontFamily: 'Parisienne',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8rem',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2.3125rem',
    },
  },
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  iconFacebook: {
    width: '1.8rem',
    height: '1.8rem',
    borderRadius: '50%',
  },
  info_icon: {
    width: '1.8rem',
    marginRight: '0.3rem',
  },
  logoContainer: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'inherit',
    },
  },
  iconArto: {
    width: '5rem',
    borderRadius: '100%',
  },
  phoneContainer: {
    display: 'grid',
    gridGap: '1rem 0',
    letterSpacing: '0.05rem',
    gridTemplateColumns: '2rem 4rem 1fr',
  },
  footerText: {
    color: '#FFF',
    letterSpacing: '0.05rem',
    fontFamily: '\'Baskervville\',serif',
  },
  PhoneIcon: {
    color: '#FFF',
  },
  detailsContent: {
    color: '#FFF',
    letterSpacing: '0.05rem',
    display: 'flex',
    alignItems: 'center',
  },
  marginBottomContainer: {
    marginBottom: '0.4rem',
  },
  allRightsReservedContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.5rem',
    fontWeight: 100,
    padding: ' 0.625rem 0',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.75rem',
    },

    '& a': {
      textDecoration: 'none',
      color: COLORS.grey.dark_1,
    },
  },
  iconMessage: {
    color: COLORS.grey.dark_1,

    '& a': {
      textDecoration: 'none',
      color: COLORS.grey.dark_1,
    }
  },
  detailsContainerText: {
    flexGrow: '0.5',
  }
});

export default withStyles(styles)(Footer);
