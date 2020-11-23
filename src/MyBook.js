import React from 'react'
import './MyBook.css'
import Book from './Book'
 
const baseURL = 'https://dapi.kakao.com/v3/search/book?target=title&query='
const imgURL = []

function MyBook() {
    return(
        <div id = 'mybook' className = "mybook_box">
            <div className = "mybook_header">My Book</div>
            <div className = "mybook_content">
                <Book url = '%EB%84%9B%EC%A7%80' title = '"똑똑한 선택을 이끄는 힘"'/>
                <Book url = '%EC%A0%9C%EB%A1%9C%ED%88%AC%EC%9B%90' title = '"경쟁이 아닌 독점을 해라"' />
                <Book url = '%ED%88%AC%EC%9E%90%EC%9D%98%EB%AA%A8%ED%97%98' title = '"끊임없이 성장하라"' />
                <Book url = '%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4' title = '"인간의 성장에 대한 역사"' />
                <Book url = '%ED%8F%89%EA%B7%A0%EC%9D%98%EC%A2%85%EB%A7%90' title = '"평균으로부터 벗어나라"' />
            </div>
        </div>
    )
}

export default MyBook