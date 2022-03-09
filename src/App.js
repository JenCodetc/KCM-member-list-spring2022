import "./App.css";
import React from "react";
import Select from "react-select";
import { useState } from "react";

// TODO: remove values, change id to year, filter out seniors
// TODO: set max width for officer div, add divs in big div
// TODO: change officer description to bullet form
// TODO: ask brian help cloudflare update

// Members' first and last names, year graduating (id)
const memberNames = [
  { label: "Julie Cha", value: "Julie Cha", id: "2025" },
  { label: "Joanna Chen", value: "Joanna Chen", id: "2023" },
  { label: "Daniel Chen", value: "Daniel Chen", id: "2024" },
  { label: "Virginia Cheng", value: "Virginia Cheng", id: "2022" },
  { label: "Zoe Cheng", value: "Zoe Cheng", id: "2025" },
  { label: "Grace Cho", value: "Grace Cho", id: "2023" },
  { label: "Judy Choi", value: "Judy Choi", id: "2022" },
  { label: "Isaac Choi", value: "Isaac Choi", id: "2024" },
  { label: "Daniel Choi", value: "Daniel Choi", id: "2024" },
  { label: "Mitchel Chung", value: "Mitchel Chung", id: "2022" },
  { label: "Madison Chung", value: "Madison Chung", id: "2024" },
  { label: "Allison Chung", value: "Allison Chung", id: "2025" },
  { label: "James Duan", value: "James Duan", id: "2025" },
  { label: "Abigail Feng", value: "Abigail Feng", id: "2025" },
  { label: "Daniel Fong", value: "Daniel Fong", id: "2023" },
  { label: "Elaine Gao", value: "Elaine Gao", id: "2024" },
  { label: "Helen Gu", value: "Helen Gu", id: "2025" },
  { label: "Joanna Hung", value: "Joanna Hung", id: "2023" },
  { label: "Faith Kim", value: "Faith Kim", id: "2022" },
  { label: "Audrey Kim", value: "Audrey Kim", id: "2022" },
  { label: "Young-A Kim", value: "Young-A Kim", id: "2025" },
  { label: "Grace Ko", value: "Grace Ko", id: "2025" },
  { label: "Hubert Kuok", value: "Hubert Kuok", id: "2024" },
  { label: "Quan Le", value: "Quan Le", id: "2022" },
  { label: "Sharon Lee", value: "Sharon Lee", id: "2022" },
  { label: "Yoonju Lee", value: "Yoonju Lee", id: "2022" },
  { label: "Rena Lee", value: "Rena Lee", id: "2023" },
  { label: "Shannon Lee", value: "Shannon Lee", id: "2024" },
  { label: "Janice Lee", value: "Janice Lee", id: "2024" },
  { label: "Casey  Leung", value: "Casey  Leung", id: "2022" },
  { label: "Alisa Leung", value: "Alisa Leung", id: "2024" },
  { label: "Rebecca  Li", value: "Rebecca  Li", id: "2023" },
  { label: "Jennifer Li", value: "Jennifer Li", id: "2025" },
  { label: "Naomi Lien", value: "Naomi Lien", id: "2024" },
  { label: "Ben Lin", value: "Ben Lin", id: "2022" },
  { label: "Ryan Moy", value: "Ryan Moy", id: "2022" },
  { label: "Eunice Ok", value: "Eunice Ok", id: "2025" },
  { label: "Sarah Ou", value: "Sarah Ou", id: "2025" },
  { label: "Emilee Pak", value: "Emilee Pak", id: "2025" },
  { label: "Brian Pan", value: "Brian Pan", id: "2022" },
  { label: "Andy  Qu", value: "Andy  Qu", id: "2023" },
  { label: "Alfred Ruan", value: "Alfred Ruan", id: "2024" },
  { label: "Matthew Schmuff", value: "Matthew Schmuff", id: "2022" },
  { label: "Justin Shim", value: "Justin Shim", id: "2023" },
  { label: "Emily Son", value: "Emily Son", id: "2022" },
  { label: "Michelle Tran", value: "Michelle Tran", id: "2025" },
  { label: "Daniel Wu", value: "Daniel Wu", id: "2025" },
  { label: "Michaela Yee", value: "Michaela Yee", id: "2024" },
  { label: "Daniel Yeom", value: "Daniel Yeom", id: "2023" },
  { label: "Daniel Yi", value: "Daniel Yi", id: "2023" },
  { label: "Ashley Yim", value: "Ashley Yim", id: "2023" },
  { label: "Raymond Yu", value: "Raymond Yu", id: "2025" },
  { label: "Ethan Yu", value: "Ethan Yu", id: "2025" },
  { label: "John Zhang", value: "John Zhang", id: "2022" },
  { label: "Eddie Zhou", value: "Eddie Zhou", id: "2023" },
].map((currentItem) => {
  return {
    ...currentItem,
    value: currentItem.label,
  };
});
console.log(memberNames);

function Officer(props) {
  return (
    <div className="OfficerBox">
      <h2>{props.title}</h2>
      <h3>
        (Currently: {props.current})
      </h3>
      <p style={{lineHeight: "25px"}}>{props.description}</p>
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

      </div>

      <div className="AllOfficers">

        <h2 style={{paddingBottom: "3%"}}>Officer Positions & Descriptions:</h2>

        <Officer
          title="President"
          current="Emily Son"
          description="Represents the ministry and oversees the workings of the ministry. Contacts guest speakers for every Large Group and other events and creates a schedule for the entire semester. Creates agenda and plans leaders meetings as well as Officers meetings. Serves as the liaison between the University of Maryland Student Group Association and KCM."
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
    </div>
  );
}

export default MemberSearch;
