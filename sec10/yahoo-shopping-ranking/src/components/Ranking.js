import React from 'react'
import PropTypes from 'prop-types'

const Ranking =({ categoryId }) => {
  return (
    <div>
      <h2>Rankingコンポーネント</h2>
      <p>カテゴリID：{ categoryId }</p>
    </div>
  )
}

Ranking.PropTypes = {
  categoryId: PropTypes.string
}

export default Ranking