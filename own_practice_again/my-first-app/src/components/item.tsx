import React from "react";

const item = ({ lists, onClick, editable, doubleClick, onKeyPress }: any) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((v: { name: string; calories: number }, i: number) => {
            return (
              <tr key={i} onDoubleClick={doubleClick}>
                {editable ? (
                  <td>
                    <input
                      type="text"
                      defaultValue={v.name}
                      onKeyPress={(e: any) => onKeyPress(e,i)}
                    />
                  </td>
                ) : (
                  <td>{v.name}</td>
                )}

                <td>{v.calories}</td>
                <td>
                  <button
                    name={v.name}
                    className="remove-button"
                    onClick={onClick}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default item;
