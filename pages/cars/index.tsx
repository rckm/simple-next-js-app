import { InferGetStaticPropsType, GetServerSideProps } from 'next';
import React, { FC } from 'react';

const Cars: FC<{ data: string[] }> = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data?.map((el, i) => {
        <li key={i}>{el}</li>;
      })}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  return {
    props: { data },
  };
};

export default Cars;

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface RootObject {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
