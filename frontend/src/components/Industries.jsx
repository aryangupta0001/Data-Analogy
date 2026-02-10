// components/Industries.jsx
const industries = [
  "Manufacturing",
  "Finance",
  "Healthcare",
  "Retail",
  "Technology",
];

export default function Industries() {
  return (
    <section className="">
      <div className="">
        <h2 className="">
          Industries We Serve
        </h2>

        <div className="">
          {industries.map((item) => (
            <span
              key={item}
              className=""
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
