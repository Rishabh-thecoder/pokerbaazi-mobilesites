import React from 'react';
import PropTypes from 'prop-types';

export default function Topheader(props) {
  return (
    <>
    <div className='pb-24 mb-22'>
      <div className='fixed-top'>
        <div className={props.colorbox} >
          <div className='container-fluid '>
              <div className='row'>
                  <div className='col-md-12'>
                    <div className='py-2'>
                      {props.title}
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

Topheader.propTypes = {
  title: PropTypes.string,
  colorbox: PropTypes.string,
};

Topheader.defaultProps = {
  title: 'PokerBaazi' ,
  colorbox: 'blue-box'
};

