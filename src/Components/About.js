import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;

    var city = data.address.city;
    var state = data.address.state;

    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Harshith's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
