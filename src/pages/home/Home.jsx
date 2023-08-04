import { Helmet } from 'react-helmet-async'
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | StudyVerse</title>
      </Helmet>
      <Header />
      {/* <OurTopContributor /> */}
    </>
  )
}

export default Home
