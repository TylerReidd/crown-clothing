import React from 'react'
import {connect} from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { selectDirectorySection } from '../../components/redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps}) => (
      <MenuItem key={id} { ...otherSectionProps}/>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);