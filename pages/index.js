import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";

const axios = require("axios").default;

export default function Home({ heros = [] }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/hero/${id}`);

    router.push("/");
  };

  return (
    <div
      style={{ paddingTop: "10px" }}
      className="container"
    >
      <h1 className="display-6">SuperHero Identity Manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard
              className="border border-2 my-2"
              style={{ maxWidth: "440px" }}
              key={hero}
            >
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link passHref href={`/${hero._id}`}>
                  <MDBBtn className="mx-1">View Hero</MDBBtn>
                </Link>
                <Link passHref href={`/edit/${hero._id}`}>
                  <MDBBtn className="mx-1">Edit Hero</MDBBtn>
                </Link>
                <MDBBtn onClick={() => handleDelete(hero._id)} className="mx-1 btn btn-danger">
                  Delete Hero
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");

  const heros = res.data.data;
  return {
    props: { heros }, // will be passed to the page component as props
  };
}
