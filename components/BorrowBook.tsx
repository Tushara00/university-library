"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { toast } from 'sonner';
import { borrowBook } from '@/lib/actions/book';
import { useRouter } from "next/navigation";

interface Props {
    userId: string;
    bookId:string;
    borrowingEligibility:{
        isEligible:boolean;
        message:string;
    }
}

const BorrowBook = ({userId,
     bookId, 
     borrowingEligibility:{isEligible, message}}: Props) => {
    const router = useRouter();
    const [borrowing, setBorrowing] = useState(false);

    const handleBorrow =async()=>{
        if(!isEligible){
               toast.error("Something went wrong", {
    description: message
  });
        }
        setBorrowing(true)

        try{
const result = await borrowBook({bookId, userId});
if(result.success){
  toast("success", {
    description:  "Borrowed successfully",
  });  
  router.push("/");
}else{
    toast.error("Something went wrong", {
   description:"an error occured while borrowing the book"
  });  
}
        }catch(error){
            toast.error("Something went wrong", {
    description: error instanceof Error ? error.message : "An unexpected error occurred",
  });
        }finally{
            setBorrowing(false);
        }
    }
  return (
       <Button
      className="book-overview_btn"
      onClick={handleBorrow}
      disabled={borrowing}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing ..." : "Borrow Book"}
      </p>
    </Button>
  )
}

export default BorrowBook