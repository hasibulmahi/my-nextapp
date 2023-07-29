import Image from 'next/image';
import React from 'react';

function DashboardPage(props) {
    return (
        <div>
            test page
            <Image
      src="/public/vercel.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
    );
}

export default DashboardPage;