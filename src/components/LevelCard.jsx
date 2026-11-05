export default function LevelCard({ title, papers, items, compulsory, optional }) {
  return (
    <div className="level-card h-100 d-flex flex-column">
      <h3 className="level-head">{title}</h3>
      <div className="level-body flex-grow-1">
        {items.length > 0 && (
          <ul>
            {items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        )}
        {compulsory.length > 0 && (
          <>
            <p className="level-sub">Compulsory</p>
            <ul>{compulsory.map((i) => <li key={i}>{i}</li>)}</ul>
          </>
        )}
        {optional.length > 0 && (
          <>
            <p className="level-sub">Two out of the following</p>
            <ul>{optional.map((i) => <li key={i}>{i}</li>)}</ul>
          </>
        )}
      </div>
      <div className="level-foot">{papers}</div>
    </div>
  );
}
