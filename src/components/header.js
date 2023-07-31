import React from 'react'

function Header(props){
    return (
        // 用 React.Fragment標籤，可以達到包裹的目的，實際上不會再有一層標籤在外面
        <React.Fragment>
            <h3>This is Header component(functional component)</h3>
            <p>info: {props.info}, myNumber: {props.myNumber}</p>
        </React.Fragment>
    )
}

// 當有多個要 export時，可以用此方式，但是在 import 的地方也要有相應選用
// export { Header, };

// 當只有一個的時候，就可以直接指定預設 export
export default Header;