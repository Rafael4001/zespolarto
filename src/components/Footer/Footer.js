import React, { Component } from 'react'
import PropTypes from "prop-types";
import Link from 'next/link'
import PhoneIcon from '@material-ui/icons/Phone';
import { FACEBOOK_URL, FACEBOOK, LOGO_ON_THE_FLOWERS, CONTACT_LINK } from "../../constants";
import Typography from "@material-ui/core/Typography";


class Footer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.footerContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.logoContainer}>
            <img
              src={LOGO_ON_THE_FLOWERS}
              alt={'logo zespolu Arto'}
              className={classes.iconArto}
            />
          </div>

          <div className={classes.link}>
            <Link className={{root: classes.link}} href={CONTACT_LINK}>
              KONTAKT
            </Link>
          </div>
          <div>
            <div className={classes.phoneContainer}>
              <Typography className={classes.phoneText}>Rafał</Typography>
              <PhoneIcon/>
              <a href="tel:+48661204475">661 204 475</a>
            </div>
            <div className={classes.phoneContainer}>
              <Typography className={classes.phoneText}>Adrian</Typography>
              <PhoneIcon/>
              <a href="tel:+48661204475">796 642 598</a>
            </div>
          </div>


          <div className={classes.socialMediaContainer}>
            <a href={FACEBOOK_URL} target={'_blank'} className={classes.socialLink}>
              <img
                src={FACEBOOK}
                alt={'logo portalu facebook'}
                className={classes.iconFacebook}
              />
            </a>
          </div>


        </div>
        <div className={classes.rightsContainer}>R.C. &copy; 2020 All rights reserved</div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {};

Footer.displayName = 'ContactContainer';

export default Footer