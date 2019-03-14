import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry }) => (
  <IndexPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
  />
)

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
