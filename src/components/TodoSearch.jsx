import React from "react";
import { useForm } from "react-hook-form";
import { TbEdit } from "react-icons/tb";

const TodoSearch = ({ add_todo, editState, toggleState }) => {
  const [inputData, setInputData] = editState;
  const [toggleSubmit] = toggleState;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const change = (event) => {
  //   setInputData(event.target.value);
  //   console.log(event.target.value,' 17');
  // }
  console.log(inputData,'18');
  return (
    <div className="todo-search">
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          add_todo(data);
          reset();
        })}
      >
        <input
          type="text"
          placeholder="Enter Todo"
          // value={inputData}
          // onChange={change}
          {...register("task", { required: true })}
        />

        {toggleSubmit ? (
          <button>Add</button>
        ) : (
          <button>
            <TbEdit size={18} />
          </button>
        )}
      </form>

      {errors.task?.type === "required" && (
        <small>This field cannot be blank</small>
      )}
    </div>
  );
};

export default TodoSearch;
