import React from 'react'
import * as style from "../../Styles/styles"

function Checkbox({isDone}) {
    if (isDone) return <style.Checkbox type="checkbox" checked/>
    else return <style.Checkbox type="checkbox" />
}

export default Checkbox