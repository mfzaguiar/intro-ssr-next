import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 40;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: #7169c1;
  height: 100vh;
`;

const CustomLink = styled.a`
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const CustomImg = styled.img`
  padding: 50px;
  width: 300px;
  border-radius: 10px;
`;

const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
    </Head>
    <CustomImg src="/static/marvel.jpeg" alt="Marvel" />
    <Title>Hello World</Title>
    <Link href="/users">
      <CustomLink>Usuários</CustomLink>
    </Link>
  </Container>
);

export default withAnalytics()(Home);
