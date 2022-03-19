import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
const axios = require("axios").default;
import { useRouter } from "next/router";

function about() {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });

      console.log("response", res);
      router.push("/");
    } catch (error) {
      console.log("err", error);
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
        />
        <MDBInput
          className="my-3"
          label="Real Name"
          id="form1"
          type="text"
          onChange={handleChange}
          name="realName"
        />
        <MDBBtn type="submit">Save</MDBBtn>
      </form>
    </div>
  );
}

export default about;
