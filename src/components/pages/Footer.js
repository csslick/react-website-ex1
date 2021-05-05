import React from 'react'

export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className="container">
        <h4>새로운 탐험과 여행 정보 등  최고의 휴가 경험을 제공하는 정보를 구독하세요</h4>
        <p className="footer-text">구독은 언제든 취소 가능합니다.</p>
        <form>
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="이메일 주소" />
          </div>
          <button className="cta-btn">구독하기</button>
        </form>
        <small>&copy; 2021 TRAVEL, All Right Reserved.</small>
      </div>
    </footer>
  )
}
