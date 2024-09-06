import PageLayout from "@/components/UI/PageLayout";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <PageLayout>
      <div className='grid justify-center'>
        <p className='text-base font-bold'>404 - Page Not Found</p>
        <Link href='/' className='flex justify-center'>
          Go to home page
        </Link>
      </div>
    </PageLayout>
  );
};

export default Custom404;
