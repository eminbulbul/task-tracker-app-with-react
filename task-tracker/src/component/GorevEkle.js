import React from "react";
import { Form, Label, Button, Input } from "react-bootstrap";
const Gorevekle = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Task
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Day & Time
          </label>
          <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};
export default Gorevekle;
