import Search from './components/search/index';
import Location from './components/location/index';
import styled from 'styled-components';

import './commonStyles.css'

const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #282538;
`

function App() {

  return (
    <div className="App">
      <Header>Github Jobs</Header>
      <Search />
      <Location/>
    </div>
  )
}

export default App
