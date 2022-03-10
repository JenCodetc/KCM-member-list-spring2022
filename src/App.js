import "./App.css";
import React from "react";
import Select from "react-select";
import { useState } from "react";

// TODO: filter out seniors
// TODO: set max width for officer div, add divs in big div
// TODO: change officer description to bullet form

// Members' first and last names, year graduating (id)
const memberNames = [
  { label: "Julie Cha", year: "2025" },
  { label: "Joanna Chen", year: "2023" },
  { label: "Daniel Chen", year: "2024" },
  { label: "Virginia Cheng*", year: "2022" },
  { label: "Zoe Cheng", year: "2025" },
  { label: "Grace Cho", year: "2023" },
  { label: "Judy Choi*", year: "2022" },
  { label: "Isaac Choi", year: "2024" },
  { label: "Daniel Choi", year: "2024" },
  { label: "Mitchel Chung*", year: "2022" },
  { label: "Madison Chung", year: "2024" },
  { label: "Allison Chung", year: "2025" },
  { label: "James Duan", year: "2025" },
  { label: "Abigail Feng", year: "2025" },
  { label: "Daniel Fong", year: "2023" },
  { label: "Elaine Gao", year: "2024" },
  { label: "Helen Gu", year: "2025" },
  { label: "Joanna Hung", year: "2023" },
  { label: "Faith Kim*", year: "2022" },
  { label: "Audrey Kim*", year: "2022" },
  { label: "Young-A Kim", year: "2025" },
  { label: "Grace Ko", year: "2025" },
  { label: "Hubert Kuok", year: "2024" },
  { label: "Quan Le*", year: "2022" },
  { label: "Sharon Lee*", year: "2022" },
  { label: "Yoonju Lee*", year: "2022" },
  { label: "Rena Lee", year: "2023" },
  { label: "Shannon Lee", year: "2024" },
  { label: "Janice Lee", year: "2024" },
  { label: "Casey Leung*", year: "2022" },
  { label: "Alisa Leung*", year: "2024" },
  { label: "Rebecca Li", year: "2023" },
  { label: "Jennifer Li", year: "2025" },
  { label: "Naomi Lien", year: "2024" },
  { label: "Ben Lin*", year: "2022" },
  { label: "Ryan Moy*", year: "2022" },
  { label: "Eunice Ok", year: "2025" },
  { label: "Sarah Ou", year: "2025" },
  { label: "Emilee Pak", year: "2025" },
  { label: "Brian Pan*", year: "2022" },
  { label: "Andy Qu", year: "2023" },
  { label: "Alfred Ruan", year: "2024" },
  { label: "Matthew Schmuff*", year: "2022" },
  { label: "Justin Shim", year: "2023" },
  { label: "Emily Son*", year: "2022" },
  { label: "Michelle Tran", year: "2025" },
  { label: "Daniel Wu", year: "2025" },
  { label: "Michaela Yee", year: "2024" },
  { label: "Daniel Yeom", year: "2023" },
  { label: "Daniel Yi", year: "2023" },
  { label: "Ashley Yim", year: "2023" },
  { label: "Raymond Yu", year: "2025" },
  { label: "Ethan Yu", year: "2025" },
  { label: "John Zhang*", year: "2022" },
  { label: "Eddie Zhou", year: "2023" },
].map((currentItem) => {
  return {
    ...currentItem,
    value: currentItem.label,
  };
});
/* console.log(memberNames); */

function Officer(props) {
  return (
    <div className="OfficerBox">
      <h3>{props.title}</h3>
      <h4>(Currently: {props.current})</h4>
      <p style={{ lineHeight: "25px", fontSize: "14px" }}>
        {props.description}
      </p>
      <br></br>
    </div>
  );
}

function MemberSearch() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="App">

      <div className="Dropdown">
        <h2 className="Header">KCM Member List: Spring 2022</h2>

        <Select
          // Filters names by search, with dropdown and clear text features
          options={memberNames}
          onChange={(v) => {
            setSearch(v);
          }}
          isClearable={true}
        />

        <p style={{ fontSize: "11px" }}>
          * refers to a member who cannot be nominated
        </p>
      </div>

      <div className="AllOfficers">
        <h2>Officer Positions & Descriptions:</h2>

        <Officer
          title="President"
          current="Emily Son"
          description="Represents the ministry and oversees the workings of the ministry.
          Contacts guest speakers for every Large Group and other events and creates a schedule for the entire semester. 
          Creates agenda and plans leaders meetings as well as Officers meetings. 
          Serves as the liaison between the University of Maryland Student Group Association and KCM."
        />

        <Officer
          title="Vice President"
          current="Justin Shim"
          description="Assists the President and acts on behalf of the President in his/her absence. Promotes and oversees the KCM bible study/small group ministry."
        />

        <Officer
          title="Large Group Coordinator"
          current="Rebecca Li"
          description="Plans location of large group meetings, as well as all official KCM events. Prepares announcements and handles pre/post large group meeting procedures."
        />

        <Officer
          title="Secretary"
          current=""
          description="Keeps minutes of all KCM related official meetings and creates, manages, and updates documentation. Oversees membership maintenance, functions as the alumni liaison,  establishes and maintains church liaisons. Makes a report for the General Body Meeting to capture the essence of the semester in its entirety."
        />

        <Officer
          title="Treasurer"
          current=""
          description="Oversees all the monetary transactions of this organization while creating and tracking the budget for both the overall semester and individual events. Organizes all fundraisers as necessary. Makes a report for the General Body Meeting concerning this organization’s financial transactions for the semester and future plans."
        />
      </div>

      <img src={require("./kcmlogo.jpeg")} className="Logo" />
    </div>
  );
}

export default MemberSearch;
