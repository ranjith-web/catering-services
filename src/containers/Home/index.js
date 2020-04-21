import React, {useState, useEffect, useRef, useCallback} from 'react';
// import {useLocalStorage} from 'react-use';
// import axios from 'axios';

//Components
import Search from '../../components/search';

function Home(props) {
  const [states, setStates] = useState([]);
  

  return (
    <React.Fragment>
      <div className="Home">
        <div className="home-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            {<Search />}
            <div className="actions">
                 
             
            </div>
          </div>


         
        </div>

        {/* <div className="home-right">
          <h5>Home right</h5>
        </div> */}
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Home;
