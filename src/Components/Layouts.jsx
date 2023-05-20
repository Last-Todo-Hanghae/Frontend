import React from 'react'
import * as style from "../Styles/styles"
import Header from './Header'
import { useState, useEffect } from 'react'
import YourTodo from '../Pages/YourTodo'
import MyTodo from '../Pages/MyTodo'

function Layouts() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  console.log("innerWidth", innerWidth);

  return (
    <style.FlexCenterColumn>
        <style.Layout width={innerWidth}>
            <Header isLogged={true} />
            <MyTodo />
        </style.Layout>
    </style.FlexCenterColumn>
  )
}

export default Layouts