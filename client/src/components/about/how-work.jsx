import "../../styles/about/how-work.css";

const HowWork = () => {
  const works = [
    {
      title: "GET AN ACCOUNT",
      description:
        "Create an account with Hack Club by verifying your identity. ",
    },
    {
      title: "GET APPROVED",
      description: "Get approved by a Hack Club to join the Nexora community. ",
    },
    {
      title: "REQUEST ACCESS FROM NEXORA",
      description: "Tell us who you are and what you're interested in. ",
    },
    {
      title: "ENTER NEXORA",
      description:
        "Once approved, you get access to the member space, projects, events, workshops, resources, and announcements. ",
    },
    {
      title: "BUILD",
      description:
        "Work on your own ideas, collaborate with other members, join workshops, or start something completely new. ",
    },
    {
      title: "SHIP",
      description:
        "Turn experiments into finished projects and share what you've built.",
    },
  ];
  return (
    <div>
      <div className="how-work">
        <h1 className="title-1">ABOUT NEXORA</h1>
        <h1 className="title">// HOW IT WORKS</h1>
        <div className="works">
          {works.map((work) => (
            <div className="work">
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
