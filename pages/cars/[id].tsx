import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Head from 'next/head';

const Car: FC<CarProps> = ({ car }) => {
  return (
    <>
      <Head>
        <title>{car.id}</title>
      </Head>
      <ul>
        <li>Car name: {car.id}</li>
        <li>Car color: {car.color}</li>
        <li>
          Car image: <img width="30%" src={car.image} alt={car.id} />
        </li>
      </ul>
    </>
  );
};

export default Car;

interface CarProps {
  car: {
    image: string;
    id: string;
    color: string;
  };
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const req = await fetch(`http://localhost:3000/${params?.id}.json`);
//   const data: CarProps = await req.json();

//   return {
//     props: { car: data },
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await fetch(`http://localhost:3000/${params?.id}.json`);
  const data: CarProps = await req.json();

  return {
    props: { car: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  const paths = data.map((car: string) => {
    return { params: { id: car } };
  });

  return {
    paths,
    fallback: false,
  };
};
