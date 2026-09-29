import "../../styles/about/how-work.css";

const Operate = () => {
  const operates = [
    {
      title: "BUILD ",
      description: "We learn by making things. ",
    },
    {
      title: "COLLABORATE",
      description: "Good ideas get better when people build together. ",
    },
    {
      title: "EXPERIMENT",
      description:
        "Not every project has to work. Trying is part of the process. ",
    },
    {
      title: "SHIP",
      description:
        "A finished imperfect project teaches more than an unfinished perfect idea.",
    },
  ];
  return (
    <div>
      <div className="how-work">
        <h1 className="title">// HOW WE OPERATE</h1>
        <div className="works">
          {operates.map((operate) => (
            <div className="work">
              <h2>{operate.title}</h2>
              <p>{operate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operate;
