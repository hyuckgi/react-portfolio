import React, { Component } from 'react';
import { Link } from 'react-router';

import './Home.css';
import section1 from "../../../img/section01.jpg";
import section2 from "../../../img/section02.jpg";
import section3 from "../../../img/section03.jpg";

let listText = [
    {
        title : "reactjs로 만들었어요",
        subscript : "surge로 deploy했어요~",
        link : "/",
        src : section1
    },
    {
        title : "Memopad는 여러분이 생각하시는 그 memopad에요",
        subscript : "데이터가 저장되지는 않아요",
        link : '/memopad',
        src : section2
    },
    {
        title : "Ajax는 axios를 사용했어요.",
        subscript : "통신은 JSONplaceholder의 mockdata를 가져오고 있습니다.",
        link : '/ajax',
        src : section3
    }
];


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {listText, section1, section2 };
    }

    render() {

        const ViewItem = this.state.listText.map((item, i) => (
            <li className="view_item" key={i}>
                <img src={item.src} alt="section_img"/>
                <span className="cover"></span>
                <div className="text_area">
                    <p className="title">{ item.title }</p>
                    <p className="subscript">{ item.subscript }</p>
                    <Link to={ item.link }>한번 가볼까?</Link>
                </div>
            </li>
        ));

        return(
            <div>
                <ul>
                    { ViewItem }
                </ul>
            </div>
        );

    }
}


export default Home;
