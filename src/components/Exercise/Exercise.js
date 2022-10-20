import React from "react";

const Exercise = ({ handleAddToExerciseDetails, exercise }) => {
  const { img, name, time, age } = exercise;
  return (
    <div className="col-lg-4">
      <div className="card rounded-0">
        <img src={img} alt="" />
        <div className="card-body text-center">
          <h4 className="card-title">{name}</h4>
          <p className="my-2">For Age : {age}</p>
          <p>Time required : {time}s</p>
          <button
            onClick={() => handleAddToExerciseDetails(exercise)}
            className="btn btn-lg btn-warning px-4 rounded-0"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
