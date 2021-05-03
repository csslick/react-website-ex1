import React from 'react'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  const { src, text, label, path } = props;

  return (
    <>
      <li className="card-item" data-category={label}>
        {/* Link 에 연결될 path URL 추가 */}
        <Link className="card-item-link" to={path}>
          <img src={src} alt={label} />
        </Link>
        <div className="card-item-info">
          <p>{text}</p>
        </div>
      </li>
    </>
  )
}
