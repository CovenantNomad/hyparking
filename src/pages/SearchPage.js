import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//components
import Container from '../components/Container';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import { useSearch } from '../hooks/useSearch';

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
        <Searchbar register={register} reset={reset} isDirty={isDirty} />
      </form>
      
      {isLoading ? (
        [...Array(3)].map((index) => <Skeleton key={index} />)
      ) : (
        <div className="lg:grid lg:grid-cols-2 lg:gap-3">
          {data?.map((item, index) => <ListItem key={index} item={item}/>)}
        </div>
      )}
    </Container>
  );
}

export default React.memo(SearchPage);