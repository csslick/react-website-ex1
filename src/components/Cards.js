import React from 'react'
import CardItem from './CardItem'

export default function Cards() {
  return (
    <section className='card-section'>
      <div className="container">
        <h1 className="mb-1">경이로운 즐거움의 여행지를 확인해보세요!</h1>
        <ul className="card-items">
          <CardItem 
            src='images/img-9.jpg'
            text='아마존 정글속 숨겨진 신비의 폭포를 탐험해 보세요'
            label="탐험"
            path='/services'
          />
          <CardItem 
            src='images/img-2.jpg'
            text='발리의 곳곳의 섬들을 탐험하는 신나는 여행 경험을 제공합니다.'
            label="스페셜"
            path='/services'
          />
          <CardItem 
            src='images/img-3.jpg'
            text='바다 위 항해를 체험하면서 낚시를 즐겨보는 것은 어떠세요?'
            label="스페셜"
            path='/services'
          />
        </ul>
      </div>
    </section>
  )
}
