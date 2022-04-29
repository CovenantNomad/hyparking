import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearch } from '../hooks/useSearch'
//components
import Container from '../components/Container';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Skeleton from '../components/Skeleton';
import ListItem from '../components/ListItem';

const SearchPage = () => {
  const [ plateNumber, setPlateNumber ] = useState(null)
  const {handleSubmit, register, reset, formState: { errors, isDirty }} = useForm()
  const { data, isLoading } = useSearch(plateNumber)

  
  const onSubmit = async (data) => {
    setPlateNumber(data.plateNumber)
  }

  return (
    <Container>
      <Navbar />
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <Searchbar register={register} />
        {errors.plateNumber && <p className='text-red-600 mt-1 pl-3'>{errors.plateNumber.message}</p>}
      </form>

      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
      {isLoading ? (
        [...Array(3)].map((_, index) => <Skeleton key={index} />)
      ) : (
        data?.length !== 0 ? (
          data?.map((item, index) => <ListItem key={index} item={item}/>)
        ) : (
        <div className="text-center mt-8 sm:col-span-2 self-center justify-self-center">
          <h3 className="text-2xl font-bold">검색하신 차량번호가 없습니다</h3>
        </div>
        )
      )}
      </div>
    </Container>
  );
}

export default React.memo(SearchPage);