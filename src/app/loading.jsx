import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center mt-1">
      <Image className='h-52'src="spinner.svg" alt="loading.." />
    </div>
  );
}
