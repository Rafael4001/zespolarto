import React, { Component } from 'react'
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


class DescriptionBlock extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={this.props.classes.mainContainer}>
          <div className={this.props.classes.titleContainer}>
            <Typography classes={{root: classes.title}}>Arto</Typography>
          </div>

          <Typography classes={{root: classes.text}}>
            <p>To więcej niż zespół muzyczny, to grupa przyjaciół, którzy mają to szczęście łączenia hobby z pracą.</p>
            Arto niesie ze sobą talent, profesjonalizm i brzmienie.<br/>
            Zgrany zespół przypadł do gustu już nie jednej osobie, robiąc to, co lubi, z pasją i precyzją.
            <br/>Dysponujemy wysokiej klasy sprzętem, który zapewni dobrą jakość dźwięku w każdych warunkach.
            <p>Zespół pochodzi z Werbkowic.</p>
          {/*  TODO Napisac cos o zasiegu w jakim gramy*/}

          </Typography>
        </div>
        <Divider/>
      </div>
    )
  }
}

DescriptionBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

DescriptionBlock.defaultProps = {};

DescriptionBlock.displayName = 'DescriptionBlock';

export default DescriptionBlock