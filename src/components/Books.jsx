import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {

    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
  


   const {books} = useLoaderData()
//    console.log(books )

    return (
        <div className='my-container gap-6 grid  sm:grid-cols-2 md:grid-cols-4' >
            
            {
                books.map(book=><Book book ={book} key={book.isbn13}></Book>)
            }

        </div>
    );
};

export default Books;