import React from "react";
import "./NotePage.css"
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "../components/Modal";

const NotePage = () => {
  return (
    <>
    <div className="note-container">
    <h3 className="title">REACT PROJECT FOR BEGINNERS</h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> created: 11 March 2009</p>
    <p className="note-date font-12 text-muted me-5">last updated: 11 March 2009</p>
    </span>
    <span className="button-group">
      <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
      <button className="btn btn-danger"><BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="description">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
      voluptas nulla pariatur?
    </p>



    

  </div>
  <Modal />
  </>
  );
};

export default NotePage;
