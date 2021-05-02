import React from 'react'

export default function TitleSection() {
  return (
    <section className="title-section">
      <video 
        src='/videos/video-2.mp4'
        muted autoPlay loop
      />
      <h1>설래이는 여행</h1>
      <p>지금 바로 경험해 보지 않겠습니까?</p>
      <button className="cta-btn">
        신청하기
      </button>
    </section>
  )
}
