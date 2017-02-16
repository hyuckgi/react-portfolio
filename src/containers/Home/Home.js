import React from 'react';
import { Link } from 'react-router';

import './Home.css';
import section1 from "../../../img/section01.jpg";
import section2 from "../../../img/section02.jpg";
import section3 from "../../../img/section03.jpg";


const Home = () => {
    const HomeView = ({children, imgPath}) => {
        let listText = {
            1 : {
                title : "reactjs로 만들었어요",
                subscript : "surge로 deploy했어요~",
                link : "/"
            },
            2 : {
                title : "Memopad는 여러분이 생각하시는 그 memopad에요",
                subscript : "데이터가 저장되지는 않아요",
                link : '/memopad'
            },
            3 : {
                title : "Ajax는 axios를 사용했어요.",
                subscript : "통신은 JSONplaceholder의 mockdata를 가져오고 있습니다.",
                link : '/ajax'
            }
        };

        return (
            <li className="view_item">
                <img src={imgPath} alt={children}/>
                <span className="cover"></span>
                <p className="title">{listText[children[children.length - 1]].title}</p>
                <p className="subscript">{listText[children[children.length - 1]].subscript}</p>
                <Link to={listText[children[children.length - 1]].link}>한번 가볼까?</Link>
            </li>
        );
    };

    return (
        <div>
            <ul>
                <HomeView imgPath={section1}>section1</HomeView>
                <HomeView imgPath={section2}>section2</HomeView>
                <HomeView imgPath={section3}>section3</HomeView>
            </ul>
        </div>
    );
};


export default Home;
