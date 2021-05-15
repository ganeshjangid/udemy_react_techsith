const SeachCountires = (porps: any) => {
  return (
    <div style={{ width: '100%' }}>
      <input
        type="text"
        placeholder="Search Countries .."
        className="search-container"
        onChange={(e) => porps.onChange(e.target.value)}
      />
    </div>
  );
};

export default SeachCountires;
