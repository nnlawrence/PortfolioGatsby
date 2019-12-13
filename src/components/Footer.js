import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Nathaniel Lawrence - A Full-Stack Boss</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer