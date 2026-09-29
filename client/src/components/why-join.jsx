import "../styles/why-join.css";

const WhyJoin = () => {
  const notes = [
    {
      title: "Build & Ship.",
      text: "Learn by doing — build websites, games, apps, hardware projects, and whatever else you're curious about. Turn ideas into real projects and actually ship them.",
    },
    {
      title: "Real Perks(YSWS).",
      text: "Ship qualifying projects through Hack Club's programs and you can earn real rewards, including hardware, domains, hosting credits, and other opportunities.",
    },
    {
      title: "Student Led, Always.",
      text: "No grades, no exams, no boring curriculum. Nexora is built by students, for students — learn together, experiment freely, and decide what you want to create.",
    },
  ];
  return (
    <div className="why-join">
      <h1 className="title">// WHY JOIN?</h1>
      <div className="notes">
        {notes.map((note) => (
          <div className="note">
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoin;
