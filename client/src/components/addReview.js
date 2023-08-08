import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

function AddReview() {
  const [formState, setFormState] = useState({
    type: "",
    title: "",
    starRating: "",
    text: "",
  });

  const navigate = useNavigate();

  const [addReview, { error: addReviewError }] = useMutation(ADD_REVIEW);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const convertToInt = (number) => {
    if (number === "5") {
      return 5;
    } else if (number === "4") {
      return 4;
    } else if (number === "3") {
      return 3;
    } else if (number === "2") {
      return 2;
    } else if (number === "1") {
      return 1;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // These lines of code are to convert the input from a string to an int
      let number = formState.starRating;
      let int = convertToInt(number);
      formState.starRating = int;
      //   :) Request starts below:

      await addReview({ variables: { ...formState } });
      navigate("/feed");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div className="join mb-8 w-full">
            <input
              value={formState.title}
              onChange={handleFormChange}
              type="text"
              name="title"
              className="input input-bordered w-4/6 mr-3"
              placeholder="Add a Review"
            />

            <label className="label" for="concert">
                <p className="label-text mr-1">Concert</p>   
                <input
                  type="radio"
                  id="concert"
                  className="radio radio-primary"
                  name="type"
                  value="Concert"
                  onClick={handleFormChange}
                  required
                />
                </label>
                <label className="label" for="artist">
                <p className="label-text mr-1">Artist</p>
                <input
                  type="radio"
                  id="artist"
                  className="radio radio-primary"
                  name="type"
                  value="Artist"
                  onClick={handleFormChange}
                  required
                />
                </label>
                <label className="label" for="venue">
                <p className="label-text mr-1">Venue</p>
                <input
                  type="radio"
                  id="venue"
                  className="radio radio-primary"
                  name="type"
                  value="Venue"
                  onClick={handleFormChange}
                  required
                />
                </label>
          </div>
          <textarea
            type="text"
            name="text"
            value={formState.text}
            onChange={handleFormChange}
            className="textarea textarea-bordered w-full mb-3"
            placeholder="Start typing..."
          ></textarea>
          <div name="starRating" className="rating rating-md block mb-8 ">
            Rating:
            <input
              type="radio"
              name="starRating"
              value="0"
              onClick={handleFormChange}
              className="rating-hidden"
            />
            <input
              type="radio"
              name="starRating"
              value="1"
              onClick={handleFormChange}
              className="mask mask-star-2"
            />
            <input
              type="radio"
              name="starRating"
              value="2"
              onClick={handleFormChange}
              className="mask mask-star-2"
            />
            <input
              type="radio"
              name="starRating"
              value="3"
              onClick={handleFormChange}
              className="mask mask-star-2"
            />
            <input
              type="radio"
              name="starRating"
              value="4"
              onClick={handleFormChange}
              className="mask mask-star-2"
            />
            <input
              type="radio"
              name="starRating"
              value="5"
              onClick={handleFormChange}
              className="mask mask-star-2"
            />
            <button type="submit" className="btn btn-primary btn-outline ml-6">
              Post Review
            </button>
          </div>
          {addReviewError && <p>{addReviewError.message}</p>}
        </div>
      </form>
    </div>
    
  );
}

export default AddReview;
