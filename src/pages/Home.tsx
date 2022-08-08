const inputs = [
  { title: "Amendoin" },
  { title: "Feijão" },
  { title: "Banana" },
  { title: "Salsa" },
  { title: "Cenoura" },
];

export default function Home() {
  function handleSubmit(e: any) {
    e.preventDefault();
    for (let i = 0; e.target.length >= i; i++) {
      console.log("input " + i + " = " + e.target[i].checked);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((ingrediente, index) => (
        <>
          <input
            className="m-4"
            type="checkbox"
            name={ingrediente.title}
            id={ingrediente.title + index}
          />
          <label htmlFor={ingrediente.title}>{ingrediente.title}</label>
        </>
      ))}
      <button className="mx-5 bg-cyan-600" type="submit">
        Enviar
      </button>
    </form>
  );
}
