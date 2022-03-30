import type { NextPage } from 'next'
import { Colors } from '../components/Colors'
import '@master/styles';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="font:40 font:heavy font:italic m:50 text:center">
          Hello World
      </h1>
      <Colors />
    </div>
  )
}

export default Home
