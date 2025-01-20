import React from 'react'
import PropTypes from 'prop-types'
const Check = (props) => {
  return (
    <div>
        {props.age >=18 ? "you can vote ✅" : "you cannot vote ❌"}
    </div>
  )
}
Check.prototypes = {
    age : PropTypes.number,
}
Check.defaultProps = {
    age : 0,
}
export default Check