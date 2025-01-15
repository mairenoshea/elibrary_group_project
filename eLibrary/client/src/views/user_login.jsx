import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUserByid, addUser, updateOneUser } from "../services/services";



export const AddUser = () => {
  const DEFAULT_FORM_DATA = {
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "", 
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      getOneUserByid(id)
        .then(res => setFormData(res))
        .catch(error => console.error(error));
    }
  }, [id]);

  const updateFormData = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const submissionFunction = id ? updateOneUser : addUser;
    submissionFunction(formData)
      .then(res => navigate(`/Home`))
      .catch(error => setErrors(error));
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Reviewer Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={updateFormData}
          />
          {errors.name && <p id="error">{errors.name.message}</p>}
        </label>

        <label>
          User Name
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={updateFormData}
          />
          {errors.userName && <p id="error">{errors.userName.message}</p>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={updateFormData}
          />
          {errors.email && <p id="error">{errors.email.message}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={updateFormData}
          />
          {errors.password && <p id="error">{errors.password.message}</p>}
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={updateFormData}
          />
          {errors.confirmPassword && <p id="error">{errors.confirmPassword.message}</p>}
        </label>

        <label>
          Image
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={updateFormData}
          />
          {errors.image && <p id="error">{errors.image.message}</p>}
        </label>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
