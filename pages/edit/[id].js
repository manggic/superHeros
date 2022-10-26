import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
const axios = require("axios").default;

const EachHero = ({ hero, id }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios(`http://localhost:3000/api/edithero`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ ...form, id }),
      });
      alert('added succesfully')

      router.push("/");
    } catch (error) {
      alert("updation failed");
    }
  };

  return (
    <div className="container pt-3" style={{ height: "84vh" }}>
      <form onSubmit={handleSubmit}>
        <MDBInput
          className="my-3"
          label="SuperHero Name"
          id="form1"
          type="text"
          onChange={handleChange}
          name="superHero"
          value={form.superHero}
        />
        <MDBInput
          className="my-3"
          label="Real Name"
          id="form1"
          type="text"
          onChange={handleChange}
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Save</MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await axios(`http://localhost:3000/api/hero/${id}`);

  const hero = res.data.data;
  return {
    props: { hero, id }, // will be passed to the page component as props
  };
}

export default EachHero;
