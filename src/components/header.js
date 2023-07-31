import React from 'react'

function Header(){
    return (
        <p>This is Header component(functional component)</p>
    )
}

// 當有多個要 export時，可以用此方式，但是在 import 的地方也要有相應選用
// export { Header, };

// 當只有一個的時候，就可以直接指定預設 export
export default Header;