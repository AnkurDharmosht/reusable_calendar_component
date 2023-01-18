import React from "react";

const option = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// const days = [
//   "12345678910111213141516171819202122232425262728293031",
// ];

let days = new Array(0);
const getDays = (year, month) => {
  console.log("start week no of month", new Date(year, month, 0));
  return new Date(year, month, 0).getDate();
};
const Calendar = ({ date }) => {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    console.log("mounted");
    mounted.current = true;
    return () => {
      console.log("unmounted");
      mounted.current = false;
    };
  }, []);

  const daysMap = React.useCallback(() => {
    console.log("daysmap");
    let count = 1;
    if (date) {
      let endCount = getDays(
        new Date(date).toLocaleString("default", { year: "numeric" }),
        new Date(date).toLocaleString("default", { month: "numeric" })
      );
      console.log("end=>", endCount);
      for (let i = 0; i < 6; i++) {
        days[i] = [];
      }

      for (let i = 0; i < 4 && count <= endCount; i++) {
        for (let j = 0; j < 8 && count <= endCount; j++) {
          const para = document.createElement("p");
          para.innerText = count;
          if (new Date(date).getDate() === count) {
            para.style.backgroundColor = "#3D73FF";
            para.style.color = "#fff";
            para.style.width = "fit-content";
            para.style.padding = "2px";
            para.style.textAlign = "center";
          }
          document.getElementById("section").appendChild(para);
          count++;
          if (count > endCount) break;
        }
        if (count > endCount) break;
      }
    }
  }, [mounted.current]);

  React.useEffect(() => {
    console.log("effect");
    daysMap();
    return () => {};
  }, [mounted.current, daysMap]);

  return (
    <div className="whitecal">
      <header className="monthyear">
        <h2>
          {new Date(date).toLocaleString("default", { month: "long" })}{" "}
          {new Date(date).toLocaleString("default", { year: "numeric" })}
        </h2>
      </header>
      <section className="gridcal6x7" id="section">
        <p className="c1 r1">Sun</p>
        <p className="c2 r1">Mon</p>
        <p className="c3 r1">Tues</p>
        <p className="c4 r1">Weds</p>
        <p className="c5 r1">Thurs</p>
        <p className="c6 r1">Fri</p>
        <p className="c7 r1">Sat</p>
        {/* <p className="c1 r2">
          <br />
        </p>
        <p className="c2 r2">
          <br />
        </p> */}
        {/* <div id="date-array"></div> */}
        {/* <p className="c3 r2">1</p>
        <p className="c4 r2">2</p>
        <p className="c5 r2">3</p>
        <p className="c6 r2">4</p>
        <p className="c7 r2">5</p>
        <p className="c1 r3">6</p>
        <p className="c2 r3">7</p>
        <p className="c3 r3">8</p>
        <p className="c4 r3">9</p>
        <p className="c5 r3">10</p>
        <p className="c6 r3">11</p>
        <p className="c7 r3">12</p>
        <p className="c1 r4">13</p>
        <p className="c2 r4">14</p>
        <p className="c3 r4">15</p>
        <p className="c4 r4">16</p>
        <p className="c5 r4">17</p>
        <p className="c6 r4">18</p>
        <p className="c7 r4">19</p>
        <p className="c1 r5">20</p>
        <p className="c2 r5">21</p>
        <p className="c3 r5">22</p>
        <p className="c4 r5">23</p>
        <p className="c5 r5">24</p>
        <p className="c6 r5">25</p>
        <p className="c7 r5">26</p>
        <p className="c1 r6">27</p>
        <p className="c2 r6">28</p>
        <p className="c3 r6">29</p>
        <p className="c4 r6">30</p>
        <p className="c5 r6">31</p> */}
        {/* <p className="c6 r6">
          <br />
        </p>
        <p className="c7 r6">
          <br />
        </p> */}
      </section>
    </div>
  );
};

export default Calendar;
