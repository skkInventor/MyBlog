import axios from 'axios'

const instance = axios.create({
    baseURL : "https://dapi.kakao.com/v3/search/book?target=title&query=",
    headers : {
        Authorization : "KakaoAK 2c15790187448acdeeb27798c0713547"
    }
})

export default instance