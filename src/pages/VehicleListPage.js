import React, { useEffect, useState } from 'react';

//components
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import TagItem from '../components/TagItem';
import { useSearchVehicle } from '../hooks/useSearchVehicle';
import VehicleItem from '../components/VehicleItem';
import { useGetNumber } from '../hooks/useGetNumber';
import SkeletonTagItem from '../components/SkeletonTagItem';
import SkeletonVehicle from '../components/SkeletonVehicle';
import Pagination from '../components/Pagination';

const VehicleListPage = () => {
  const limit = 12
  const [ searchOption, setSearchOption ] = useState("전체")
  const [ page, setPage ] = useState(1)
  const [ totalPage, setTotalPage ] = useState(1)
  const [ totalResults, setTotalResults ] = useState(0)
  const offset = (page - 1) * limit

  const { isLoading, data } = useSearchVehicle(searchOption)
  const { data: numberOfVehicle, isLoading: numberIsLoading } = useGetNumber()
  
  const onClickHandler = (condition) => {
    setSearchOption(condition)
    setPage(1)
  }

  useEffect(() => {
    numberOfVehicle?.map(
      item => item.name === searchOption && (
        setTotalPage(Math.ceil(item.totalNumber / limit)),
        setTotalResults(item.totalNumber)
      ))
  }, [numberIsLoading, searchOption])

  return (
    <Container>
      <Navbar />
      <Logo />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        { numberIsLoading ? (
          [...Array(8)].map((_, index) => <SkeletonTagItem key={index} />)
        ) : (
          numberOfVehicle?.map((item, index) => <TagItem key={index} item={item} onClickHandler={onClickHandler} />)
        )}
      </div>
      <div className="h-1 border-t border-gray-300 my-4"></div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {isLoading ? (
          [...Array(2)].map((_, index) => <SkeletonVehicle key={index} />)
        ) : (
          data?.length !== 0 ? (
            data?.slice(offset, offset + limit).map(item => <VehicleItem key={item.owner} item={item} />)
          ) : (
            <div className="text-center my-8 sm:col-span-2 md:col-span-3">
              <h3 className="text-2xl font-bold">등록된 차량이 없습니다</h3>
            </div>
          )
        )}
      </div>
      {isLoading ? null : <Pagination page={page} setPage={setPage} totalPage={totalPage} totalResults={totalResults} limit={limit}/> }
    </Container>
  );
}

export default VehicleListPage;