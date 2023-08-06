import React from "react";
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

      const { data } = await addReview({ variables: { ...formState } });
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
    // <div>
    //   <h3>Add a Review</h3>
    //   <form onSubmit={handleFormSubmit}>
    //     <h1>What are you doing a review of?</h1>
    //     <ul>
    //       <li>
    //         <input
    //           type="radio"
    //           id="concert"
    //           name="type"
    //           value="Concert"
    //           onClick={handleFormChange}
    //           required
    //         />
    //         <label for="concert">
    //           <p>concert</p>
    //         </label>
    //       </li>
    //       <li>
    //         <input
    //           type="radio"
    //           id="artist"
    //           name="type"
    //           value="Artist"
    //           onClick={handleFormChange}
    //           required
    //         />
    //         <label for="artist">
    //           <p>Artist</p>
    //         </label>
    //       </li>
    //       <li>
    //         <input
    //           type="radio"
    //           id="venue"
    //           name="type"
    //           value="Venue"
    //           onClick={handleFormChange}
    //           required
    //         />
    //         <label for="venue">
    //           <p>Venue</p>
    //         </label>
    //       </li>
    //     </ul>
    //     <input
    //       type="text"
    //       name="title"
    //       placeholder="Enter title"
    //       value={formState.title}
    //       onChange={handleFormChange}
    //     />
    //     <input
    //       type="number"
    //       name="starRating"
    //       placeholder="How many stars would you give it?"
    //       value={formState.starRating}
    //       onChange={handleFormChange}
    //     />
    //     <input
    //       type="text"
    //       name="text"
    //       placeholder="Want to add any text?"
    //       value={formState.text}
    //       onChange={handleFormChange}
    //     />
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
        <div className="join mb-8 w-full">
          <input value={formState.title} onChange={handleFormChange} type="text" name="title" className="input input-bordered w-full join-item" placeholder="Add a Review"/>

          <select className="select select-bordered join-item">
            <option disabled selected>Type</option>
            <option id="concert" value="Concert" name="type" onClick={handleFormChange}>Concert</option>
            <option id="artist" value="artist" name="type" onClick={handleFormChange}>Artist</option>
            <option id="venue" value="venue" name="type" onClick={handleFormChange}>Venue</option>
          </select>
        </div>
        <textarea type="text" name="text" value={formState.text} onChange={handleFormChange} className="textarea textarea-bordered w-full mb-3" placeholder="Start typing..."></textarea>
          <div name="starRating" className="rating rating-md block mb-8 ">
            Rating:
            <input type="radio" name="rating-9" className="rating-hidden" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" checked />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <button type="submit" className="btn btn-primary btn-outline ml-6">Post Review</button>
          </div>
        {addReviewError && <p>{addReviewError.message}</p>}
      </div>
      </form>
</div>
  );
}

export default AddReview;