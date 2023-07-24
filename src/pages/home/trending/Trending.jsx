import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
  const [endPoint, setEndPint] = useState('day')
  const { data, loading } = useFetch(`/trending/movie/${endPoint}`)
  const onTabChange = (tab) => {
    setEndPint(tab === 'Day' ? 'day' : 'week')
  }
  console.log(data)
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle"></span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint ={endPoint}/>
    </div>
  )
}
export default Trending
