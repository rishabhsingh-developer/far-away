export default function Footer({ ite }) {
  const totalitem = ite.length;
  const completeItem = ite.filter((i) => i.packed).length;

  const percentage = Math.round((completeItem / totalitem) * 100);

  return (
    <footer>
      {percentage === 100 ? (
        <> ready to go </>
      ) : (
        <>
          You have {totalitem} item in your list, and you alredy packed
          {completeItem} {percentage} {"%"}
        </>
      )}
    </footer>
  );
}
