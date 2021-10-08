import React from 'react';
const Home=({handleLogout})=>{

    return(
<section>
<nav>
<h2> welcome</h2>
<button onClick={handleLogout}>logout</button>
</nav>
</section>

    );
}
export default Home;
